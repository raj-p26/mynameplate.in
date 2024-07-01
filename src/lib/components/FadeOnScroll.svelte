<script lang="ts">
  import { onMount } from "svelte";

  export let delay: number = 0;
  export let class_: string = "";

  let element: HTMLElement;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            isVisible = true;
          } else {
            isVisible = false;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  });
</script>

<div
  bind:this={element}
  class:show={isVisible}
  class={class_}
  style="--delay: {delay}ms;"
>
  <slot />
</div>

<style>
  div {
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s ease-in-out;
    transition-delay: var(--delay, 0s);
  }

  .show {
    opacity: 1;
    transform: translateY(0);
  }
</style>
