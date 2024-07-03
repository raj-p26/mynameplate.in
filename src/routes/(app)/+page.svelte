<script>
  import { enhance } from "$app/forms";

  import FadeOnScroll from "$lib/components/FadeOnScroll.svelte";
  import TweenOnVisible from "$lib/components/TweenOnVisible.svelte";
  import Input from "$lib/components/Input.svelte";

  export let form;

  let text = encodeURI(
    "https://wa.me/917045238377?text=" +
      "Hi, There! I am interested in buying your product."
  );
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div>
  <FadeOnScroll>
    <img
      src="/banner.jpeg"
      width="100%"
      class="shadow banner"
      alt="Bharti Creation Banner"
    />
  </FadeOnScroll>

  <div class="spacer-3"></div>

  <div class="content">
    <div class="about-content">
      <FadeOnScroll delay={200}>
        <h2>
          It takes hands to build a HOUSE, But only hearts can build a HOME
        </h2>
      </FadeOnScroll>
      <FadeOnScroll delay={400}>
        <p>
          "BHARTI CREATION is your go-to destination where artistry and
          innovation converge seamlessly. With a proud history spanning over
          seven years, we have established ourselves as leaders in the industry,
          renowned for our premium quality nameplates. Holding exclusive
          copyrights and patents, our unwavering commitment to excellence
          propels us to constantly refine our designs, ensuring that our
          products not only inspire aesthetically but also set unmatched
          standards in quality. Experience the difference with our nameplates."
        </p>
        <a class="btn btn-outline-dark shadow" href="/about">About Us</a>
      </FadeOnScroll>
    </div>

    <div class="spacer-3"></div>
    <hr />
    <div class="spacer-3"></div>

    <FadeOnScroll>
      <h1>Explore Our Categories</h1>
    </FadeOnScroll>

    <div class="spacer-2"></div>

    <div class="category-grid">
      <FadeOnScroll class_="card p-3">
        <h5 class="card-title">Nameplates</h5>
        <p class="card-text">My Heaven is right here.</p>
        <a href="/" class="btn btn-primary">
          View All <i class="bi bi-arrow-right" />
        </a>
      </FadeOnScroll>
      <FadeOnScroll delay={100} class_="card p-3">
        <h5 class="card-title">LED Nameplates</h5>
        <p class="card-text">Light up your dream home.</p>
        <a href="/" class="btn btn-primary">
          View All <i class="bi bi-arrow-right" />
        </a>
      </FadeOnScroll>
      <FadeOnScroll delay={200} class_="card p-3">
        <h5 class="card-title">DND Panels</h5>
        <p class="card-text">Good indication of service.</p>
        <a href="/" class="btn btn-primary">
          View All <i class="bi bi-arrow-right" />
        </a>
      </FadeOnScroll>
      <FadeOnScroll delay={300} class_="card p-3">
        <h5 class="card-title">Society Name Boards</h5>
        <p class="card-text">Society based on creation is creative.</p>
        <a href="/" class="btn btn-primary">
          View All <i class="bi bi-arrow-right" />
        </a>
      </FadeOnScroll>
    </div>

    <div class="spacer-2"></div>

    <FadeOnScroll>
      <div class="my-accordion" id="about">
        <div class="my-auto">
          <img
            src="/how-we-work.jpg"
            width="100%"
            style="border-radius: 18px;"
            alt="How We Work"
          />
        </div>
        <div>
          <h4>How we work?</h4>
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. Consultation
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body fw-light">
                  Start with a personalized consultation to make your vision and
                  preferences for the nameplate design. With numerous
                  possibilities available, we guide you through the process to
                  ensure a clear picture of how your nameplate can perfectly
                  complement your home entrance.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. Material Selection
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body fw-light">
                  The appearance of a nameplate is enhanced by selection of
                  material and design. By combining these elements effectively,
                  we create nameplates that stand out. Our approach focuses on
                  each material and integrating them seamlessly into our
                  designs, ensuring that every nameplate we craft is unique and
                  exceptional.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. Customize Design
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body fw-light">
                  The appearance of your nameplate hinges on the interplay
                  between material and design. By balancing these elements, we
                  create nameplates that truly stand out. Each time, we tailor
                  your nameplate uniquely to ensure you discover the best
                  possible design for your needs.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  4. Providing Artwork
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body fw-light">
                  Upon receiving a design proof, you'll gain a clear idea of how
                  your nameplate will look. You'll have the opportunity to
                  choose from four to five options for font, design, and the
                  placement of elements on the nameplate. Artwork is provided to
                  ensure your satisfaction, and only after your final
                  confirmation, we proceed with crafting your customized
                  nameplate.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  5. Production
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body fw-light">
                  Once you confirm your selection, production will commence
                  immediately. With all facilities under one roof, your
                  nameplate will be ready within two days at our factory unit.
                  We uphold the highest standards by utilizing the finest
                  quality materials, and most of the processes are conducted
                  with precision machinery to ensure an ultra-finished product.
                </div>
              </div>
            </div>
          </div>
          <a class="btn shadow mt-2 btn-wa" target="_blank" href={text}>
            <i class="bi bi-whatsapp"></i>
            Whatsapp now
          </a>
        </div>
      </div>
    </FadeOnScroll>

    <div class="spacer-2"></div>

    <FadeOnScroll>
      <div class="features">
        <div class="title me-4">
          <h4 class="fw-light" style="color: rgba(0, 0, 0, .3);">
            Primary Benefits
          </h4>
          <h3>Craftsmanship, Personalization, Durability</h3>
        </div>
        <div class="feature-items">
          <div class="feature-item">
            <i class="bi bi-c-circle"></i>
            <h6>Copyright</h6>
            <p>
              We are the sole copyright holder of these LED nameplates, from
              2016. Purchase authentic nameplates directly from us.
            </p>
          </div>
          <div class="feature-item">
            <i class="bi bi-boxes"></i>
            <h6>Unique Design each time</h6>
            <p>
              Each time, receive a unique nameplate that sets yours apart from
              the rest. Our nameplates stand out in the market with
              distinctiveness and quality.
            </p>
          </div>
          <div class="feature-item">
            <i class="bi bi-shield-check"></i>
            <h6>Worth to buy</h6>
            <p>
              Select our nameplates for unrivaled individuality, enduring
              quality, personalized options, expert advice, exclusive designs,
              and customer-satisfaction.
            </p>
          </div>
        </div>
      </div>
    </FadeOnScroll>

    <div class="spacer-2"></div>

    <hr />

    <FadeOnScroll delay={200}>
      <div class="title">
        <h5 class="fw-light">Trusted by Leading Companies</h5>
      </div>
    </FadeOnScroll>

    <div class="spacer-2"></div>

    <FadeOnScroll delay={400}>
      <div class="clients">
        <img src="/amazon.png" alt="amazon" height="60" />
        <img src="/bajaj.png" alt="bajaj" height="60" />
        <img src="/dutian.png" alt="dutian" height="60" />
        <img src="/lodha.png" alt="lodha" height="60" />
        <img src="/tata.png" alt="tata" height="60" />
      </div>
    </FadeOnScroll>

    <FadeOnScroll>
      <div class="achievements row">
        <div
          class="section-bg"
          style="background-image: url('/section-bg.jpg');"
        ></div>
        <div class="summary col-lg-6" style="z-index: 100;">
          <h5>Recent Achievements</h5>
          <h6>Celebrating Our Success and Milestones.</h6>
          <p style="font-size: .9rem;">
            Explore our recent accomplishments as we continue to deliver
            exceptional quality and satisfaction to our valued customers.
          </p>
          <div class="spacer-2"></div>
          <button class="btn btn-outline-light shadow">Contact Us</button>
        </div>
        <div class="work-review col-lg-6" style="z-index: 100;">
          <div>
            <p class="fs-1 fw-semibold">
              <TweenOnVisible limit={2110} />+
            </p>
            <p>Happy Customers</p>
          </div>
          <div>
            <p class="fs-1 fw-semibold">
              <TweenOnVisible limit={30} />+
            </p>
            <p>Professional Staffing</p>
          </div>
          <div>
            <p class="fs-1 fw-semibold">
              <TweenOnVisible limit={1000} />+
            </p>
            <p>Unique Designs</p>
          </div>
          <div>
            <p class="fs-1 fw-semibold">
              <TweenOnVisible limit={98} />%
            </p>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </FadeOnScroll>

    <div class="spacer-2"></div>
    <hr />
    <div class="spacer-2"></div>

    <FadeOnScroll delay={200}>
      <div class="contact-section" id="contact-us">
        <div>
          <h1>Contact Us</h1>
          <h4 class="fw-light">Let's hear from You</h4>
        </div>

        <div class="info">
          <div style="border-left: 1px solid rgba(0,0,0,.1);" class="ps-2">
            <i class="bi bi-envelope-at fs-1"></i>
            <h5>Say Hello</h5>
            <a
              href="mailto:dkargathra@gmail.com"
              class="text-decoration-none fw-light"
              style:color={"grey"}
            >
              dkargathra@gmail.com
            </a>
            <br />
            <a
              href="tel:+917045238377"
              class="text-decoration-none fw-light"
              style:color={"grey"}
            >
              +91 7045238377
            </a>
            <br />
            <a
              href="tel:+919870831393"
              class="text-decoration-none fw-light"
              style:color={"grey"}
            >
              +91 9870831393
            </a>
          </div>
          <div style="border-left: 1px solid rgba(0,0,0,.1);" class="ps-2">
            <h3>
              <i class="bi bi-geo-alt fs-1"></i>
            </h3>
            <p class="fw-light" style:color="grey">
              319- Hillview IND EST. Behind R-City Mall,<br />
              Amrut Nagar, Ghatkopar<br />
              WEST, Mumbai 400086.
            </p>
          </div>
        </div>

        <div>
          <form method="post" use:enhance>
            <Input
              label_text="Name"
              id="name"
              name="contact-name"
              error_message={form?.name}
              placeholder="Enter you name"
            />
            <Input
              label_text="Email"
              id="email"
              name="contact-email"
              input_type="email"
              error_message={form?.email}
              placeholder="Enter your email"
            />
            <Input
              label_text="Feedback"
              id="feedback"
              name="contact-feedback"
              input_type="textarea"
              error_message={form?.feedback}
              placeholder="Enter your feedback"
            />
            <p class="form-text">
              <i class="bi bi-info-circle"></i>
              All the fields are required.
            </p>
            <div>
              <button type="submit" class="btn btn-outline-dark">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div>
          <!-- svelte-ignore a11y-missing-attribute -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.63253413642715!2d72.9136819!3d19.1023669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c5a9051d1b%3A0x57a22f56a28c9fbc!2sBharti%20creation!5e0!3m2!1sen!2sin!4v1719849335328!5m2!1sen!2sin"
            width="100%"
            height="400"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </FadeOnScroll>
  </div>
  <div class="spacer-2"></div>
</div>

<style>
  .about-content {
    width: 80%;
  }

  .content {
    padding: 0 1.2rem;
    margin: 0 auto;
    max-width: 1400px;
    width: 90%;
  }

  p {
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  a.btn-wa {
    color: #fff;
    background-color: #25d366;
  }

  a.btn-wa:hover {
    background-color: #21bd5d;
  }

  .category-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .my-accordion {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 1rem;
  }

  .features .bi {
    font-size: 2rem;
  }

  .features {
    display: flex;
    justify-content: space-between;
  }

  .feature-items {
    display: flex;
  }

  .feature-item {
    padding-left: 10px;
    margin: 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0.8rem;
  }

  .clients {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .clients img {
    padding: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .achievements {
    color: #fff;
    padding: 1rem;
    border-radius: 10px;
    position: relative;
    border: 1px solid black;
    margin-top: 3rem;
  }

  .achievements .section-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 10;
    filter: blur(4px);
  }

  .work-review {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-section {
    display: grid;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: repeat(2, 50%);
    gap: 20px;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 20px;
  }

  @media (width <= 768px) {
    .content {
      width: 100%;
    }

    .about-content {
      width: 100%;
    }

    .contact-section {
      display: flex;
      flex-direction: column;
    }

    .info {
      display: flex;
      flex-direction: column;
    }
  }

  @media (width <= 900px) {
    .category-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    .my-accordion {
      display: flex;
      flex-direction: column;
    }

    .features,
    .feature-items {
      display: flex;
      flex-direction: column;
    }
  }

  @media (width <= 1440px) {
    .features {
      display: flex;
      flex-direction: column;
    }
  }
</style>
