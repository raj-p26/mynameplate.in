<script>
  import { page } from "$app/stores";

  $: currentPath = $page.url.pathname;
  $: currentHash = $page.url.hash;
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/bharti-creation-logo.png" alt="Bharti Creation" height="40" />
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
          <a
            class="nav-link {currentPath == '/' && currentHash == ''
              ? 'active'
              : null}"
            href="/"
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link {currentHash == '#about' ? 'active' : null}"
            href="/#about"
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
              <a
                class="dropdown-item nav-link {currentPath ==
                '/products/nameplates'
                  ? 'active'
                  : null}"
                href="/products/nameplates"
              >
                Nameplates
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link {currentPath ==
                '/products/led-nameplates'
                  ? 'active'
                  : null}"
                href="/products/led-nameplates"
              >
                LED Nameplates
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link {currentPath ==
                '/products/dnd-panels'
                  ? 'active'
                  : null}"
                href="/products/dnd-panels"
              >
                DND Panels
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link {currentPath ==
                '/products/society-name-boards'
                  ? 'active'
                  : null}"
                href="/products/society-name-boards"
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
              <a
                class="dropdown-item nav-link {currentPath ==
                '/gallery/nameplates'
                  ? 'active'
                  : null}"
                href="/gallery/nameplates"
              >
                Nameplates
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link {currentPath ==
                '/gallery/led-nameplates'
                  ? 'active'
                  : null}"
                href="/gallery/led-nameplates"
              >
                LED Nameplates
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link {currentPath ==
                '/gallery/dnd-panels'
                  ? 'active'
                  : null}"
                href="/gallery/dnd-panels"
              >
                DND Panels
              </a>
            </li>
            <li>
              <a
                class="dropdown-item nav-link {currentPath ==
                '/gallery/society-name-boards'
                  ? 'active'
                  : null}"
                href="/gallery/society-name-boards"
              >
                Society Name Boards
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link {currentHash == '#contact-us' ? 'active' : null}"
            href="/#contact-us"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .dropdown-item.active {
    color: #fff;
  }
</style>
