<script lang="ts">
  export let path: string;

  $: breadcrumb = generate_breadcrumb(path);

  function generate_breadcrumb(path: string) {
    const parts = path.split("/").filter((item) => item);
    const breadcrumb = ["/"];

    let current_path = "";
    parts.forEach((part) => {
      current_path += `/${part}`;
      breadcrumb.push(current_path);
    });

    return breadcrumb;
  }
</script>

<nav
  aria-label="breadcrumb"
  class="d-flex justify-content-center"
  style="--bs-breadcrumb-divider: '>';"
>
  <ol class="breadcrumb">
    {#each breadcrumb as part (part)}
      <li class="breadcrumb-item">
        <a href={part}>{part}</a>
      </li>
    {/each}
  </ol>
</nav>

<style>
  a {
    text-decoration: none;
    color: grey;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    color: black;
  }
</style>
