<script lang="ts">
  import { page } from "$app/stores";
  import not_found_img from "$lib/assets/not-found.jpeg";
</script>

<svelte:head>
  <title>{$page.error?.message}</title>
</svelte:head>

<div class="mx-auto">
  <img src={not_found_img} width="100%" alt="Not Found" />
  <h3 class="fw-normal my-3">Oops, looks like the page is lost.</h3>
  <h5 class="fw-light mb-3">
    This is not a fault, just an accident that was not intentional.
  </h5>
</div>

<style>
  div {
    max-width: 700px;
    width: 100%;
  }
</style>
