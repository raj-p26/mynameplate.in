<script lang="ts">
  import { onMount } from "svelte";

  let element: HTMLElement;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          } else {
            isVisible = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  });
</script>

<div bind:this={element} class:show={isVisible}>
  <slot />
</div>

<style>
  div {
    opacity: 0;
    background-color: aqua;
    transform: translateY(30px);
    transition: 0.5s ease-in-out;
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
</style>
