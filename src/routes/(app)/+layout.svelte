<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<section>
  <h1>Navbar is supposed to be here.</h1>
  <slot />
</section>

<style>
  section {
    margin-top: 5.5rem;
  }
</style>
