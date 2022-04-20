import BlogTemp from "./blogs2";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <section class="hero-section inner-page">
      {/* <div class="wave">
        <svg
          width="1920px"
          height="265px"
          viewBox="0 0 1920 265"
          version="1.1"
          style={{ xmlns: "http://www.w3.org/2000/svg" }}
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Apple-TV"
              transform="translate(0.000000, -402.000000)"
              fill="#FFFFFF"
            >
              <path
                d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </svg>
      </div> */}

      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="col-md-7 text-center hero-text">
                <h1 data-aos="fade-up" data-aos-delay="">
                  Blog Posts
                </h1>
                <p class="mb-5" data-aos="fade-up" data-aos-delay="100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ol>
          <h2>Blog</h2>
        </div>
      </section>
      <BlogTemp />
    </section>
  );
}
export default Blogs;
