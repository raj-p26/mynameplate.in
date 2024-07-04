<script lang="ts">
  export let data;
</script>

<div class="container">
  {#each data.image_paths as image (image.split(".")[0])}
    <div class="img-item">
      <img src={image} alt="{data.type} image" />
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .img-item {
    flex: 0 1 calc(20% - 20px);
    margin-bottom: 20px;
  }

  .img-item img {
    width: 100%;
    height: auto;
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
