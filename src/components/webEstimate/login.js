import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";

function Login() {
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <section
      className="container d-flex align-items-center justify-content-center"
      style={{ background: "#000000" }}
    >
      <div className="login ">
        <div className="row ">
          <div className="col left">
            <img
              src="assets/img/login/s-1.png"
              alt="Image"
              className="img-fluid img"
            />
            <div
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "24px",
                marginTop: "52px",
                fontColor: "#000000",
              }}
            >
              <span style={{ fontWeight: "700" }}>Directly Procure </span>
              <br />
              from manufacturers at Best Prices
            </div>
          </div>
          <div className="col right">
            <img
              src="assets/img/login/login-thekabook.png"
              alt="Image"
              className="img-fluid img"
              style={{ marginTop: "100px" }}
            />
            <div
              style={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "18px",
                marginTop: "24px",
                color: "#808080",
              }}
            >
              Construction Management Made Easy
            </div>
            <div
              style={{
                fontFamily: "Raleway",
                fontWeight: "700",
                fontSize: "18px",
                marginTop: "64px",
                marginBottom: "52px",
                fontColor: "#000000",
              }}
            >
              Please Login to continue
            </div>
            <div>
              <div className="row">
                <div className="col"></div>
                <div className="col mbn">
                  <span
                    style={{
                      textAlign: "start",
                      fontFamily: "Raleway",
                      fontWeight: "400",
                      fontSize: "16px",
                      marginTop: "52px",
                      fontColor: "#808080",
                    }}
                  >
                    Enter your Mobile Number:
                  </span>
                  <PhoneInput
                    country={"in"}
                    id={"phone"}
                    value={phoneNo}
                    // onChange={(phone) => this.setState({ phone })}
                    onChange={(e) => setPhoneNo(e)}
                    name="phone_number"
                  />
                </div>
                <div className="col"></div>
              </div>
            </div>
            <div className="button">
              <div className="mobileInput ">
                <button
                  // href=""
                  class="btn-get-started scrollto"
                  style={{
                    maxHeight: "42px",
                    border: "0",
                    marginTop: "36px",
                  }}
                  onClick={null}
                >
                  Send&nbsp;OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
