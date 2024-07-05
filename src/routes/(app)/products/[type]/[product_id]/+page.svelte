<script lang="ts">
  import FadeOnScroll from "$lib/components/FadeOnScroll.svelte";
  import { Converter } from "showdown";

  const converter = new Converter();

  export let data;
  let product = data.product;
  let content = converter.makeHtml(product.description.replace(/[ ]{2,}/g, ""));

  let text = encodeURI(
    "https://wa.me/917045238377?text=" +
      `Hi, There! I am interested in Product: ${product.id}`
  );
</script>

<svelte:head>
  <title>{product.name} | Bharti Creation</title>
</svelte:head>

<div class="container">
  <br />
  <FadeOnScroll>
    <h1 class="text-center mt-3">{product.name}</h1>
  </FadeOnScroll>
  <hr class="my-4" />
  <FadeOnScroll>
    <h2>{product.title}</h2>
    <p>{product.summary}</p>
  </FadeOnScroll>
  <FadeOnScroll>
    <img
      src="/product-images/{product.product_type}/{product.image_path}"
      alt={product.name}
      width="100%"
    />
    <h3 class="my-2">&#8377;{product.price}</h3>
  </FadeOnScroll>
  <hr />
  <FadeOnScroll>
    <div class="product-content">
      {@html content}
    </div>
  </FadeOnScroll>
  <hr />
  <FadeOnScroll>
    <a class="btn btn-outline-success" href={text} role="button">Get in touch</a
    >
  </FadeOnScroll>
  <div class="spacer-3"></div>
</div>
