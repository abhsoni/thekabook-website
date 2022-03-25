function Faq() {
  return (
    <section id="faq" class="faq section-bg">
      <div class="container">
        <div class="section-title">
          <span>Frequently Asked Questions</span>
          <h2>Frequently Asked Questions</h2>
          {/* <h2>Frequently Asked Questions</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i>{" "}
              <a
                data-bs-toggle="collapse"
                class="collapse"
                data-bs-target="#faq-list-1"
              >
                Can I get my orders delivered on site for free?
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div
                id="faq-list-1"
                class="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  You can get your orders with a minimum value delivered for
                  FREE on your site. We are expanding our network pan india and
                  will facilitate 24 hour delivery
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i>{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                class="collapsed"
              >
                Is my data safe and secure on the platform?
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                <p>
                  We use state of the art 256-bit encryption to secure your
                  data. Your data is safe with us. We only share your
                  requirement of materials with our trusted vendors and hide all
                  your personal information.;
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i>{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                class="collapsed"
              >
                How do you calculate my estimate so accuratley?
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Our copyright algorithms perform complex calculations to make
                  approximations of inputs but it can be changed as per user
                  requirement. We also use live and local rates of materials in
                  your city and give you the best detail estimate which you can
                  share with your clients
                </p>
              </div>
            </li>

            {/* <li data-aos="fade-up" data-aos-delay="300">
              <i class="bx bx-help-circle icon-help"></i>{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                class="collapsed"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li> */}

            {/* <li data-aos="fade-up" data-aos-delay="400">
              <i class="bx bx-help-circle icon-help"></i>{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                class="collapsed"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Faq;
