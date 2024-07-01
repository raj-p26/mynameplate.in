<script>
  import { page } from "$app/stores";
  import src from "$lib/assets/images/bharti-creation-logo.png";

  let currentPath = $page.url.pathname;
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img {src} alt="Bharti Creation" height="40" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
        <li class="nav-item">
          <a class="nav-link {currentPath == '/' ? 'active' : null}" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link {currentPath == '/about' ? 'active' : null}"
            href="/about"
          >
            About Us
          </a>
        </li>
        <li class="nav-item dropdown">
          <button
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Our Products
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item nav-link" href="/products/nameplates">
                Nameplates
              </a>
            </li>
            <li>
              <a class="dropdown-item nav-link" href="products/led-nameplates">
                LED Nameplates
              </a>
            </li>
            <li>
              <a class="dropdown-item nav-link" href="products/dnd-panels">
                DND Panels
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link"
                href="products/society-name-boards"
              >
                Society Name Boards
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <button
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gallery
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item nav-link" href="/gallery/nameplates">
                Nameplates
              </a>
            </li>
            <li>
              <a class="dropdown-item nav-link" href="/gallery/led-nameplates">
                LED Nameplates
              </a>
            </li>
            <li>
              <a class="dropdown-item nav-link" href="/gallery/dnd-panels">
                DND Panels
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link"
                href="/gallery/society-name-boards"
              >
                Society Name Boards
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link {currentPath == '/contact-us' ? 'active' : null}"
            href="/"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  /* .dropdown:hover > .dropdown-menu {
    display: block;
  }
  .nav-item:hover > .dropdown-menu {
    display: block;
  }
  ul li {
    list-style-type: none;
    display: inline;
  }

  .navbar-nav .nav-link {
    display: inline-block;
  }

  .dropdown > .dropdown-toggle:active {
    pointer-events: none;
  } */
</style>
