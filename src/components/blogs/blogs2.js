import { Link } from "react-router-dom";

function BlogTemp(props) {
  const { blogNo, setBlogNo } = props;
  const urlblog1 = "/blogs/page";
  const urlblog2 = "/blogs/page2";

  return (
    <section class="section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4">
            <div class="post-entry">
              <Link to={`${urlblog1}`} class="d-block mb-4">
                <img
                  src="assets\img\blogs\blog-1img.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </Link>
              <div class="post-text">
                <span class="post-meta">
                  May 06, 2022 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <Link to={`${urlblog1}`}>
                    8 questions you need to ask a before hiring a home
                    contractor
                  </Link>
                </h3>
                <p>
                  Whenever you are hiring a contractor, you are hiring an expert
                  person
                </p>
                <p>
                  <Link to={`${urlblog1}`} class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <Link to={`${urlblog2}`} class="d-block mb-4">
                <img
                  src="assets\img\blogs\blog-2img.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </Link>
              <div class="post-text">
                <span class="post-meta">
                  May 06, 2022 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <Link to={`${urlblog2}`}>
                    5 Basic Requirements to Become a Thekedar in India
                  </Link>
                </h3>
                <p>
                  Visit any construction site in any part of our country, you
                  will spot that one super active person.
                </p>
                <p>
                  <Link to={`${urlblog2}`} class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="post-entry">
              <a href="blog-single.html" class="d-block mb-4">
                <img src="assets/img/img_1.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="/page">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to={`${url}`} class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <a href="blog-single.html" class="d-block mb-4">
                <img src="assets/img/img_1.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="/blogs/page">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to={`${url}`} class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div> */}
          {/* <div class="col-md-4">
            <div class="post-entry">
              <a href="/page" class="d-block mb-4">
                <img src="assets/img/img_2.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="#">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to="/page" class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <a href="blog-single.html" class="d-block mb-4">
                <img src="assets/img/img_3.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="#">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to="/page" class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="post-entry">
              <a href="blog-single.html" class="d-block mb-4">
                <img src="assets/img/img_4.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="/blogs/blog">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to="/page" class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <a href="blog-single.html" class="d-block mb-4">
                <img src="assets/img/img_3.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="#">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to="/page" class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="post-entry">
              <a href="blog-single.html" class="d-block mb-4">
                <img src="assets/img/img_2.jpg" alt="Image" class="img-fluid" />
              </a>
              <div class="post-text">
                <span class="post-meta">
                  December 13, 2019 &bullet; By <a href="#">Admin</a>
                </span>
                <h3>
                  <a href="#">
                    Chrome now alerts you when someone steals your password
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  optio.
                </p>
                <p>
                  <Link to="/page" class="readmore">
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div class="row">
          <div class="col-12 text-center">
            <span class="p-3 active text-primary">1</span>
            <a href="#" class="p-3">
              2
            </a>
            <a href="#" class="p-3">
              3
            </a>
            <a href="#" class="p-3">
              4
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default BlogTemp;
