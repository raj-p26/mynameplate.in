<script lang="ts">
  import { page } from "$app/stores";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  export let data;

  let path_name = $page.url.pathname;
</script>

<div class="container">
  <br />
  <div class="spacer-3"></div>
  <h1 class="text-center">{data.type}</h1>
  <div class="spacer-3"></div>
  <Breadcrumb path={path_name} />
  <div class="spacer-3"></div>
  <hr />
  <div class="spacer-4"></div>

  <div class="products-container">
    {#each data.products as product, idx (idx)}
      <div class="img-item">
        <div class="overflow-hidden">
          <img src={product.image_path} alt={product.name} height="200" />
        </div>
        <p>&#8377; {product.price}</p>
      </div>
    {:else}
      <p>No Products Yet</p>
    {/each}
  </div>
  <div class="spacer-2"></div>
</div>

<style>
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .img-item {
    flex: 0 1 calc(20% - 20px);
    margin-bottom: 20px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1400px) {
    .img-item {
      flex: 0 1 calc(25% - 20px);
    }
  }

  @media screen and (max-width: 1200px) {
    .img-item {
      flex: 0 1 calc(33.33% - 20px);
    }
  }

  @media screen and (max-width: 1000px) {
    .img-item {
      flex: 0 1 calc(50% - 20px);
    }
  }

  @media screen and (max-width: 768px) {
    .img-item {
      flex: 0 1 calc(100% - 20px);
    }
  }
</style>
