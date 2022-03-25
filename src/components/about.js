import PureCounter from "@srexi/purecounterjs";
// new PureCounter();

function About() {
  //   new PureCounter({
  //     selector: ".purecounter",
  //     start: 0,
  //     end: 100,
  //     duration: 2,
  //     delay: 10,
  //     once: false,
  //     repeat: true,
  //     decimals: 0,
  //     legacy: true,
  //     filesizing: false,
  //     currency: true,
  //     separator: true,
  //   });
  return (
    <section>
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="assets/img/img1.png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content">
              <h3>
                Order Materials in just 1-click. We will deliver it within 24
                hrs
              </h3>
              <p class="fst-italic">
                Do you know: Efficient material management can boost contractors
                profit by upto 75%
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>Lowest Prices Guaranteed
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> 24x7 Call and Chat Support
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Available on Credit*
                </li>
              </ul>
              {/* <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="counts" class="counts">
        <div class="container">
          <div class="row counters">
            <div
              class="col-lg-3 col-6 text-center"
              style={{ dispaly: "inline" }}
            >
              {/* <span
                data-purecounter-start="0"
                data-purecounter-end="5"
                data-purecounter-duration="1"
                data-purecounter-legacy="true"
                class="purecounter"
              ></span> */}
              <span>5+</span>

              <p>Brands</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              {/* <span
                data-purecounter-start="0"
                data-purecounter-end="35"
                data-purecounter-duration="1"
                data-purecounter-legacy="true"
                class="purecounter"
              ></span> */}
              <span>35 Cr+</span>

              <p>Projects Managed</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              {/* <span
                data-purecounter-start="0"
                data-purecounter-end="3000"
                data-purecounter-duration="1"
                class="purecounter"
              ></span> */}
              <span>3000+</span>
              <p>SKU’s</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              {/* <span
                data-purecounter-start="0"
                data-purecounter-end="10"
                data-purecounter-duration="1"
                class="purecounter"
              ></span> */}
              <span>10</span>
              <p>Cities</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default About;
