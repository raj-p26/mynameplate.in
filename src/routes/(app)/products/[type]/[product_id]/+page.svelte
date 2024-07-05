<script lang="ts">
  import { Converter } from "showdown";

  const converter = new Converter();

  export let data;
  let product = data.product;
  let content = converter.makeHtml(product.description);
</script>

<div class="container">
  <br />
  <h1 class="text-center mt-3">{product.name}</h1>
  <hr class="my-4" />
  <h2>{product.title}</h2>
  <p>{product.summary}</p>
  <img
    src="/product-images/{product.product_type}/{product.image_path}"
    alt={product.name}
    width="100%"
  />
  <h3 class="my-2">&#8377;{product.price}</h3>
  <hr />
  <p>{@html content}</p>
</div>
