<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<section>
  <slot />
</section>

<Footer />

<style>
</style>
