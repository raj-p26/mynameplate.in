<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";

  export let duration = 1500;
  export let limit: number;
  let value = tweened(0, { duration });

  let element: HTMLElement;

  onMount(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            value.set(limit);
          } else {
            value.set(0, { duration: 0 });
          }
        });
      },
      { threshold: 1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  });
</script>

<span bind:this={element}>
  {Math.round($value)}
</span>

<style></style>
