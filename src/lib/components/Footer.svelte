<script lang="ts"></script>

<footer style:background-color={"whitesmoke"} style:padding-bottom={"20px"}>
  <div>
    <div class="company-info">
      <img
        src="/bharti-creation-logo.png"
        alt="Bharti Creation Logo"
        class="mb-3"
        height="100"
      />
      <p>
        "Discover personalized elegance with our crafted nameplates and mirrors.
        Elevate your space today."
      </p>
      <div class="spacer-2"></div>
      <div>
        <p>
          <a href="tel:+917045238377">+91 7045238377</a>
          - Whatsapp
        </p>
        <p>
          <a href="tel:+919870831393">+91 9870831393</a>
          - Phone
        </p>
        <p>
          <a href="mailto:dkargathra@gmail.com">dkargathra@gmail.com</a>
          - Email
        </p>
      </div>
    </div>

    <div class="footer-links">
      <div class="d-flex flex-column gap-2">
        <h5>Company</h5>
        <a href="/">Home</a>
        <a href="/#about">About Us</a>
        <a href="/#contact-us">Contact Us</a>
      </div>
      <div class="d-flex flex-column gap-2">
        <h5>Our Products</h5>
        <a href="/products/nameplates"> Nameplates </a>
        <a href="/products/led-nameplates"> LED Nameplates </a>
        <a href="/products/dnd-panels"> DND Panels </a>
        <a href="/products/society-name-boards"> Society Name boards </a>
      </div>
      <div>
        <h5>Social Media</h5>
        <a
          href="https://in.linkedin.com/in/dhaval-kargathra-7898a4118"
          target="_blank"
        >
          <i class="bi bi-linkedin fs-3"></i>
        </a>
      </div>
    </div>
  </div>

  <p style:margin-bottom={"0px"} class="text-center">
    &copy; Bharti Creation {new Date().getFullYear()}
  </p>
  <div class="spacer-2"></div>
</footer>

<style>
  .spacer-2 {
    display: none;
  }

  footer {
    background-color: whitesmoke;
    padding-bottom: 10px;
  }

  footer > div {
    padding: 3rem 10px 0 10px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin: 0 auto;
    width: 90%;
  }

  .company-info p {
    width: 60%;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 33%);
  }

  a {
    text-decoration: none;
    color: gray;
    transition: 0.2s ease-in-out;
  }

  a:hover {
    color: #000;
  }

  @media (width <= 900px) {
    .spacer-2 {
      display: block;
    }

    footer > div {
      width: 100%;
    }

    footer > div,
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .company-info p {
      width: 100%;
    }
  }
</style>
