import { Database } from "bun:sqlite";
import { unlinkSync } from "fs";
import path from "path";

interface ProductData {
  id?: string;
  name: string;
  title: string;
  summary: string;
  product_type: string;
  image_path: string;
  description: string;
  price: string;
  add_date?: string;
}

export class Product {
  static is_created = false;
  static product_types = [
    "nameplates",
    "led-nameplates",
    "dnd-panels",
    "society-name-boards",
  ];

  static db: Database = new Database("db.sqlite");

  static set_db(db_name: string = "db.sqlite") {
    this.db = new Database(db_name);
  }

  static up() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS product_type (
        id VARCHAR(40) NOT NULL PRIMARY KEY,
        type_name VARCHAR(30) NOT NULL
      );
    `);

    let query = this.db.prepare("INSERT INTO product_type VALUES (?, ?);");

    this.product_types.forEach((product_type) => {
      query.run(crypto.randomUUID(), product_type);
    });

    this.db.exec(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(40) NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        title VARCHAR(50) NOT NULL,
        summary VARCHAR(255) NOT NULL,
        image_path VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        price INTERGER NOT NULL,
        type_id VARCHAR(20) NOT NULL,
        add_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(type_id) REFERENCES product_type(id)
      );
    `);
  }

  static add_product(product: ProductData): [boolean, string | null] {
    let product_type_id = this.db
      .query<{ id: string }, string>(
        `
    SELECT id FROM product_type WHERE type_name = ?;
    `
      )
      .get(product.product_type);

    if (product_type_id == null) {
      return [false, "Unknown product type."];
    }

    product.id = crypto.randomUUID();

    let query = this.db.prepare(`
    INSERT INTO products (
      id, name, title,
      summary, image_path, type_id,
      description, price
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `);

    try {
      let res = query.run(
        product.id,
        product.name,
        product.title,
        product.summary,
        product.image_path,
        product_type_id.id,
        product.description,
        product.price
      );

      return [res.changes >= 0, null];
    } catch (error: any) {
      return [false, error.message];
    }
  }

  static of(product_type: string): [ProductData[] | null, string | null] {
    let product_type_id = this.db
      .query<{ id: string }, string>(
        `
    SELECT id FROM product_type WHERE type_name = ?;
    `
      )
      .get(product_type);

    if (product_type_id == null) {
      return [null, "Unknown product type."];
    }

    return [
      this.db
        .query<ProductData, string>(
          `SELECT products.id, name, title, summary,
        image_path, description, product_type.type_name as product_type, price
        FROM products JOIN product_type ON products.type_id = product_type.id
        WHERE products.type_id = ?;`
        )
        .all(product_type_id.id),
      null,
    ];
  }

  static all(): ProductData[] {
    return this.db
      .query<ProductData, null>(
        `SELECT products.id, name, title, summary,
        image_path, description, product_type.type_name as product_type, price
        FROM products JOIN product_type ON products.type_id = product_type.id;`
      )
      .all(null);
  }

  static get(id: string) {
    return this.db
      .query<ProductData, string>(
        `SELECT products.id, name, title, summary,
        image_path, description, product_type.type_name as product_type, price FROM products
        JOIN product_type ON products.type_id = product_type.id AND products.id = ?`
      )
      .get(id);
  }

  static get_product_type(id: string) {
    return this.db
      .query<string, string>(
        `SELECT product_type.type_name as type_name FROM products
        JOIN product_type ON products.type_id = product_type.id AND products.type_id = ?;`
      )
      .get(id);
  }

  static get_product_type_id(type_: string) {
    return this.db
      .query<{ id: string }, string>(
        `SELECT id FROM product_type WHERE type_name = ?;`
      )
      .get(type_);
  }

  static update(prod: {
    id: string;
    name?: string;
    title?: string;
    summary?: string;
    image_path?: string;
    description?: string;
    product_type?: string;
    price?: string;
  }) {
    let query = "UPDATE products SET ";
    let params: string[] = [];

    if (prod.name != "undefined" && prod.name) {
      query += " name = ?,";
      params.push(prod.name);
    }
    if (prod.title != "undefined" && prod.title) {
      query += " title = ?,";
      params.push(prod.title);
    }
    if (prod.summary != "undefined" && prod.summary) {
      query += " summary = ?,";
      params.push(prod.summary);
    }
    if (prod.image_path != "undefined" && prod.image_path) {
      query += " image_path = ?,";
      params.push(prod.image_path);
    }
    if (prod.description != "undefined" && prod.description) {
      query += " description = ?,";
      params.push(prod.description);
    }
    if (prod.product_type != "undefined" && prod.product_type) {
      let type_id = this.get_product_type_id(prod.product_type);
      query += " type_id = ?,";
      params.push(type_id!.id);
    }
    if (prod.price != "-1" && prod.price) {
      query += " price = ?,";
      params.push(prod.price);
    }

    query = query.slice(0, query.length - 1);
    query += " WHERE id = ?;";
    params.push(prod.id);

    try {
      let res = this.db.run(query, params);
      return [res.changes, null];
    } catch (e: any) {
      return [null, e.message];
    }
  }

  static down() {
    this.db.exec("DROP TABLE IF EXISTS product_type;");
    this.db.exec("DROP TABLE IF EXISTS products;");

    this.up();
  }

  static delete(id: string, type_: string): boolean {
    let data = this.db
      .query<{ image_path: string }, string>(
        "DELETE FROM products WHERE id=? RETURNING image_path;"
      )
      .get(id);
    if (data) {
      let path_ = path.join(
        process.cwd(),
        `static/product-images/${type_}/${data.image_path}`
      );

      unlinkSync(path_);
    }
    return data?.image_path != null;
  }
}
