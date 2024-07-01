<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<section>
  <slot />
</section>

<style>
  section {
    width: 80%;
    margin: 0 auto;
  }

  @media (width <= 768px) {
    section {
      width: 100%;
    }
  }
</style>
