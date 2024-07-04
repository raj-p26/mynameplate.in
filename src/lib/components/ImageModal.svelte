<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  export let src: string;
  export let alt: string;

  let dispatch = createEventDispatcher();
</script>

<div class="close" transition:fade>
  <button on:click={() => dispatch("close")}>
    <i class="bi bi-x-lg fs-3"></i>
  </button>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="backdrop" transition:fade on:click={() => dispatch("close")} />

<div class="my-modal" transition:fly={{ y: -100 }}>
  <img {src} {alt} width="100%" />
</div>

<style>
  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1100;
  }

  .my-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 1000px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 1101;
  }

  .close {
    z-index: 1102;
    position: fixed;
    top: 0%;
    right: 0%;
    margin-top: 1rem;
    margin-right: 1rem;
  }
  .close button {
    background-color: transparent;
    border: none;
    color: white;
  }
</style>
