function Contact() {
  function refreshPage(event) {
    alert("Your message has been sent. Thank you!");
    // window.location.reload(false);
    // event.preventDefault();
    // window.location.replace("/");
  }
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <span>Contact</span>
          <h2>Contact</h2>
          {/* <p>
          Sit sint consectetur velit quisquam cupiditate impedit suscipit
          alias
        </p> */}
        </div>

        <div class="row">
          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  185, Vishwakarma Nagar, Annapurna Rd, Indore, Madhya Pradesh
                  452009
                </p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>hello@thekabook.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 89898 63366</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8567.241173513416!2d75.8309330559442!3d22.692665926365585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd476b23e641%3A0x1263136774a83f0b!2sSiddharth%20Inani%20and%20Associates!5e0!3m2!1sen!2sin!4v1648129244285!5m2!1sen!2sin"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIDzMeC1YEwnZUOp72Dixcz6TllwbPYl1Jx3HlBrtPmpGEoQ/formResponse"
              method="post"
              role="form"
              class="php-email-form"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="entry.1120641196"
                    class="form-control"
                    id="name"
                    required
                  />
                </div>
                <div class="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="entry.1416197705"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="entry.2116426183"
                  id="subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="name">Message</label>
                <textarea
                  class="form-control"
                  name="entry.1974263531"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message">error</div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit" onClick={refreshPage}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
