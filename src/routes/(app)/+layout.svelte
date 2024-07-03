<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let text = encodeURI(
    "https://wa.me/917045238377?text=" +
      "Hi, There! I am interested in buying your product."
  );
</script>

<Navbar />

<div style:margin-top={"4rem"}></div>

<div class="contact">
  <a
    class="btn d-flex align-items-center justify-content-center text-light"
    style:font-size=".8rem"
    style:background-color="#125d7a"
    href="tel:+919870831393"
  >
    <i class="bi bi-telephone"></i>&nbsp;Call
  </a>
  <a
    class="btn d-flex align-items-center justify-content-center text-light"
    style:font-size=".8rem"
    style:background-color="#25d366"
    href={text}
  >
    <i class="bi bi-whatsapp"></i>&nbsp;Whatsapp
  </a>
  <a
    class="btn d-flex align-items-center justify-content-center text-light"
    style:font-size=".8rem"
    style:background-color="#191919"
    href="mailto:dkargathra@gmail.com"
  >
    <i class="bi bi-envelope-at"></i>&nbsp;Enquiry
  </a>
</div>

<section>
  <slot />
</section>

<Footer />

<style>
  .contact {
    position: fixed;
    width: 40%;
    z-index: 100;
    top: 50%;
    bottom: 50%;
    right: -15%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3rem;
    gap: 6px;
    transform: rotate(270deg);
  }

  @media (width <= 786px) {
    .contact {
      position: fixed;
      top: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: rotate(0deg);
    }
  }
</style>
