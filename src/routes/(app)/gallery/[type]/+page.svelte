<script lang="ts">
  import ImageModal from "$lib/components/ImageModal.svelte";

  export let data;

  let show_modal = false;
  $: target_image = "";

  const open_modal = (img: string) => {
    target_image = img;
    show_modal = true;
  };
</script>

<svelte:head>
  <title>{data.type} Gallery | Bharti Creation</title>
  <meta
    name="description"
    content="Explore {data.type} gallery featuring high-quality options. Discover designs that combine durability, style and functionality, perfect for personalizing any space."
  />
  <meta
    name="keywords"
    content="nameplates, led nameplates, dnd panels, society name boards, designing, bharti creation"
  />
</svelte:head>

<br />
<div class="p-4">
  <h1 class="text-center">{data.type} Gallery</h1>
</div>
<hr />
<div class="container">
  {#each data.image_paths as image, idx (image.split(".")[0])}
    <div class="img-item">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        src={image}
        alt="{data.type} image"
        on:click={() => open_modal(data.image_paths[idx])}
      />
    </div>
  {/each}
</div>

{#if show_modal}
  <ImageModal
    src={target_image}
    alt="{data.type} image"
    on:close={() => (show_modal = false)}
  />
{/if}

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .img-item {
    flex: 0 1 calc(20% - 20px);
    margin-bottom: 20px;
    overflow: hidden;
  }

  .img-item img {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .img-item img:hover {
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
