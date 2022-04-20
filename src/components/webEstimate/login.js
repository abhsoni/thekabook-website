import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";

function Login() {
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <section className="login">
      <div className="container">
        <div className="row ">
          <div className="col left">
            <img
              src="assets/img/login/s-1.png"
              alt="Image"
              className="img-fluid img"
            />
            <div>Directly Procure from manufacturers at Best Prices</div>
          </div>
          <div className="col right">
            <img
              src="assets/img/login/login-thekabook.png"
              alt="Image"
              className="img-fluid img"
            />
            <div>Construction Management Made Easy</div>
            <div>Please Login to continue</div>
            <div>
              <div className="row">
                <div className="col"></div>
                <div className="col mbn">
                  <span style={{ textAlign: "start" }}>
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
            <div>
              <div className="mobileInput ">
                <button
                  // href=""
                  class="btn-get-started scrollto"
                  style={{
                    maxHeight: "42px",
                    border: "0",
                  }}
                  onClick={null}
                >
                  Send&nbsp;Link
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
