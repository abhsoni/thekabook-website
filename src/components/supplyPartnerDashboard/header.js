import { Link } from "react-router-dom";

function Header(props) {
  const { userName, setUserName } = props;
  console.log("header.........", userName);
  function logoutHandler() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <section style={{ paddingTop: "0px" }}>
      <div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center ">
            {/* <h1 class="logo">
              <a href="index.html">eNno</a>
            </h1> */}
            {/* <div>1234567890</div> */}
            <i
              className={"bi mobile-nav-toggle bi-list "}
              // onClick={() => null}
            ></i>
            <div class="logo" style={{ marginLeft: "15px" }}>
              <img src="assets/img/logo.png" alt="" class="img-fluid" />
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#fff",
                fontFamily: "Poppins",
                fontWeight: "500",
                marginLeft: "15px",
                marginTop: "15px",
              }}
            >
              Supply Partner
            </div>
            <div
              className="col"
              style={{
                fontSize: "24px",
                color: "#fff",
                fontFamily: "Raleway",
                fontWeight: "400",
                textAlign: "end",
                marginTop: "15px",
              }}
            >
              {userName ? `${userName[0].full_name}` : null}
            </div>
            {userName ? (
              <a
                style={{
                  color: "white",
                  marginLeft: "40px",
                  font: "Poppins",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
                class="logout"
                href=""
                onClick={() => logoutHandler()}
              >
                Log Out
              </a>
            ) : null}
          </div>
        </header>
      </div>
    </section>
  );
}
export default Header;
