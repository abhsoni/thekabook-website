function Team() {
  return (
    <section id="team" class="team section-bg">
      <div class="container">
        <div class="section-title">
          <span>Team</span>
          <h2>Team</h2>
          {/* <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </p> */}
        </div>

        <div class="row justify-content-between">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-1.jpg" alt="" />
              <h4>Viraj Verma</h4>
              <span>Co-Founder</span>
              <p style={{ marginBottom: "-8px" }}>
                Ex- Microsoft, Ex-Blackbuck
              </p>
              <p>
                8+ yrs Exp. in Building Products for B2B & B2C in logistics,
                healthcare and productivity domain
              </p>
              <div class="social">
                {/* <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/virverma/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-2.jpg" alt="" />
              <h4>Sidharth Inani</h4>
              <span>Co-Founder</span>
              <p style={{ marginBottom: "-8px" }}>Ex- CBRI</p>
              <p>
                8+ yrs Exp. in facilitating 800+ cr projects in Residential,
                Commercial, Institutional sector
              </p>
              <div class="social">
                {/* <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/sidinani/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" alt="" />
              <h4>Ambika Prasad</h4>
              <span>Director of Technology</span>
              <p style={{ marginBottom: "-8px" }}>Ziploan</p>
              <p>
                8+ yrs Exp. in facilitating holistic full-stack Projects at
                scale using agile and micro-services architecture.
              </p>
              <div class="social">
                {/* <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/ambika-prasad-singh-576b5348/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
