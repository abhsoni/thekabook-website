import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services ";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Team from "./components/team";
import Contact from "./components/contact";
import Blogs from "./components/blogs/blogs";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Route, Routes, Switch } from "react-router-dom";
import Page from "./components/blogs/page";
import Page2 from "./components/blogs/page2";
import { createBrowserHistory } from "history";
import NotFound from "./components/notFound";
import Login from "./components/webEstimate/login";
import SupervisorForm from "./components/supervisorForm/supervisor-form";
import Dashboard from "./components/supplyPartnerDashboard/dashboard";
import GoogleMapFunc from "./components/supplyPartnerDashboard/googleMap";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isFeatures, setIsFeatures] = useState(false);
  const [isTeam, setIsTeam] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("cement");
  const [blogNo, setBlogNo] = useState("");
  const highlightNavBar = () => {
    if (window.scrollY <= 1062) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    if (window.scrollY > 1062 && window.scrollY < 1850) {
      setIsAbout(true);
    } else {
      setIsAbout(false);
    }
    if (window.scrollY >= 1850 && window.scrollY < 4632) {
      setIsFeatures(true);
    } else {
      setIsFeatures(false);
    }
    if (window.scrollY >= 4632 && window.scrollY < 5400) {
      setIsTeam(true);
    } else {
      setIsTeam(false);
    }
    if (window.scrollY >= 5400) {
      setIsContact(true);
    } else {
      setIsContact(false);
    }
  };
  const navBarSet = () => {
    if (isMobile) {
      setIsMobile(!isMobile);
    } else {
      // setTransparentHeader(true);
    }
  };
  //   window.addEventListener("scroll", (event) => {
  //     console.log(window.scrollY);
  //     console.log(window.scrollX);
  //   });
  window.addEventListener("scroll", highlightNavBar);
  const pathname = window.location.pathname;
  var stylingObject;
  if (pathname === "/login") {
    stylingObject = { section: { paddingBottom: "0px" } };
  } else {
    stylingObject = { section: { paddingBottom: "60px" } };
  }
  console.log(pathname);
  function logoutHandler() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <section style={stylingObject.section}>
      {pathname === "/supervisor-form" ? null : (
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center justify-content-between">
            {/* <h1 class="logo">
            <a href="index.html">eNno</a>
          </h1> */}

            <Link to="/" class="logo">
              <img src="assets/img/logo.png" alt="" class="img-fluid" />
            </Link>

            <nav
              id="navbar"
              className={`navbar ${isMobile ? "navbar-mobile" : ""}`}
              // {isMobile ? "navbar" : "navbar-mobile"}
              onClick={navBarSet}
            >
              <ul>
                <li>
                  <a
                    class={`nav-link scrollto ${isHome ? "active" : ""}`}
                    href="/#hero"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class={`nav-link scrollto ${isAbout ? "active" : ""}`}
                    href="/#about"
                  >
                    About
                  </a>
                  {/* <NavLink
                  to="#about"
                  activeClassname="active"
                  class="nav-link scrollto"
                >
                  About
                </NavLink> */}
                </li>
                <li>
                  <a
                    class={`nav-link scrollto ${isFeatures ? "active" : ""}`}
                    href="/#services"
                  >
                    Features
                  </a>
                  {/* <NavLink
                  to="#features"
                  activeClassname="active"
                  class="nav-link scrollto"
                >
                  Features
                </NavLink> */}
                </li>
                {/* <li>
                <a class="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li> */}
                <li>
                  <a
                    class={`nav-link scrollto ${isTeam ? "active" : ""}`}
                    href="/#team"
                  >
                    Team
                  </a>
                </li>
                {/* <li> */}
                <Link
                  // class={`nav-link scrollto ${isContact ? "active" : ""}`}
                  to="/blogs"
                >
                  Blogs
                </Link>
                {/* <NavLink
                  to="/blogs"
                  activeClassname="active"
                  class="nav-link scrollto"
                >
                  Blogs
                </NavLink> */}
                {/* </li> */}
                <li>
                  <a
                    class={`nav-link scrollto ${isContact ? "active" : ""}`}
                    href="/#contact"
                  >
                    Contact
                  </a>
                </li>
                {window.localStorage.getItem("token") ? (
                  <a href="/" onClick={() => logoutHandler()}>
                    Log Out
                  </a>
                ) : (
                  <Link
                    // class={`nav-link scrollto ${isContact ? "active" : ""}`}
                    to="/login"
                  >
                    Login
                  </Link>
                )}
                <li>
                  <a
                    class="getstarted scrollto"
                    href="https://play.google.com/store/apps/details?id=com.thekabook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download App
                  </a>
                </li>
              </ul>
              <i
                className={
                  isMobile
                    ? "bi mobile-nav-toggle bi-x "
                    : "bi mobile-nav-toggle bi-list "
                }
                onClick={() => setIsMobile(!isMobile)}
              ></i>
            </nav>
          </div>
        </header>
      )}
      {/* <Switch> */}
      <Routes>
        <Route
          path="/"
          element={[
            <Home />,
            <About />,
            <Services />,
            <Testimonials />,
            <Faq />,
            <Team />,
            <Contact />,
            <Footer />,
          ]}
        />
        <Route
          path="blogs"
          element={<Blogs blogNo={blogNo} setBlogNo={setBlogNo} />}
        ></Route>
        <Route path="blogs/page" element={<Page blogNo={blogNo} />} exact />
        <Route path="blogs/page2" element={<Page2 blogNo={blogNo} />} exact />
        <Route path="login" element={<Login />} />
        <Route path="supervisor-form" element={<SupervisorForm />}></Route>
        <Route
          path="supply-partner-dashboard"
          element={
            <Dashboard
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        ></Route>
        <Route
          path="supply-partner-dashboard/maps"
          element={
            <GoogleMapFunc
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
          exact
        ></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Switch> */}
      {/* </Router> */}
      {/* <Home /> */}
      {/* <About />
        <Services />
        <Testimonials />
        <Faq />
        <Team />
        <Contact />

        <Footer /> */}
      {/* </Route> */}
    </section>
  );
}

export default App;
