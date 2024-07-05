<script lang="ts"></script>

<svelte:head>
  <title>Product Gallery | Bharti Creation</title>
</svelte:head>

<div class="container">
  <h1 class="py-3 text-center">Product Gallery</h1>
  <hr />
  <div class="spacer-3"></div>
  <h2>Welcome to our Product Gallery!</h2>
  <h4 class="fw-light">
    Explore our range of high-quality products designed to meet your specific
    needs. Our offerings include:
  </h4>

  <ul>
    <li>
      <b>Nameplates:</b> Custom-made nameplates to enhance your personal or business
      identity.
    </li>
    <li>
      <b>LED Nameplates:</b> Illuminated nameplates for high visibility and modern
      appeal.
    </li>
    <li>
      <b>DND Panels:</b> Stylish and functional Do Not Disturb panels for various
      settings.
    </li>
    <li>
      <b>Society Name Boards:</b> Elegant name boards for societies and organizations.
    </li>
  </ul>
  <hr />

  <div class="spacer-2"></div>

  <h4 class="fs-light">
    Discover the perfect product to suit your requirements and make a lasting
    impression.
  </h4>

  <div class="spacer-2"></div>

  <div class="link-container">
    <div class="link-card">
      <a href="/gallery/nameplates">Nameplates</a>
    </div>
    <div class="link-card">
      <a href="/gallery/led-nameplates">LED nameplates</a>
    </div>
    <div class="link-card">
      <a href="/gallery/dnd-panels">DND panels</a>
    </div>
    <div class="link-card">
      <a href="/gallery/society-name-boards">Society Name boards</a>
    </div>
  </div>

  <div class="spacer-3"></div>
</div>

<style>
  .link-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }

  .link-card {
    padding: 0.6rem 1.5rem;
    background-color: rgb(16, 93, 169);
  }

  .link-card > a {
    text-decoration: none;
    font-size: 1.3rem;
    color: white;
  }

  @media (width <= 768px) {
    .link-container {
      display: flex;
      flex-direction: column;
    }
  }
</style>
