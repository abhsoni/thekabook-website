import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Splogin(props) {
  const {
    setShowDashboard,
    partnerData,
    setPartnerData,
    setUserName,
    userName,
    authSuccessful,
    setAuthSuccessful,
    showDashboard,
  } = props;
  const [phoneNo, setPhoneNo] = useState("");
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  // var authenticationToken = "";
  const [token, setToken] = useState(null);
  const [otpMessage, setOtpMessage] = useState("");
  // var authentication_token = "";

  // const [authSuccessful, setAuthSuccessful] = useState(false);
  console.log(phoneNo);
  console.log(otpMessage);
  function sendOtpFunction() {
    if (phoneNo.length != 12) {
      alert(
        "👉Invalid number of digits.\n" +
          "🙂 Please enter valid Mobile Number📴."
      );
      return;
    }
    const phone_number_format =
      "+" +
      phoneNo.substring(0, 2) +
      phoneNo.substring(2, 7) +
      phoneNo.substring(7, 12);
    console.log("jkdhkh", phoneNo, " ", phone_number_format);
    axios
      .post(
        // "https://prod.thekabook.com/api/v1/login/",
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/login/",
        {
          phone_number: phone_number_format,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        (response) => {
          console.log("Successful", response);
        },
        setShowVerifyOtp(true),
        alert("Thank You.\n" + "A message will be sent to you.")
      )
      .catch((err) => console.log("Something went wrong.", err));
  }

  function verifyOtpFunction() {
    console.log(`${otpMessage}`);
    // console.log("Authentication Token: "+`${authenticationToken}`);
    // if (otpMessage.length != 4) {
    //   alert(
    //     "👉Invalid number of digits.\n" +
    //       "🙂 Please enter valid Mobile Number📴."
    //   );
    //   return;
    // }
    const phone_number_format =
      "+" +
      phoneNo.substring(0, 2) +
      phoneNo.substring(2, 7) +
      phoneNo.substring(7, 12);
    axios
      .post(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/verify-otp/",
        {
          phone_number: phone_number_format,
          // phone_number: "+919876543210",
          otp: otpMessage,
          // otp: "2021",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        (response) => {
          const authToken = response.data.auth_token;
          console.log(response.data.auth_token);
          // authenticationToken = "Token" + "/n" + authToken;
          // authentication_token = "Token " + authToken;
          setAuthSuccessful(true);
          var authTokenData = `Token ${response.data.auth_token}`;
          console.log("Authentication is Successful: ", authTokenData);
          console.log("this is from authenticationToken: ", authTokenData);
          console.log(`authentication_token::&& ${authTokenData}`);
          if (authToken) {
            window.localStorage.setItem("token", authTokenData);
            // localStorage.setItem("auth_token", authTokenData);
            getUserData(authTokenData);
            window.location.reload();
          }
          // if (authToken) getUserName(authTokenData);
          if (authToken) setToken(authTokenData);
          // console.log(
          //   "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NTE5MzYwODAsImVtYWlsIjpudWxsLCJvcmlnX2lhdCI6MTY1MTMzMTI4MCwicGhvbmVfbnVtYmVyIjoiKzkxOTg3NjU0MzIxMCIsInVzZXJuYW1lIjoiKzkxOTg3NjU0MzIxMCJ9.gfc7Ur_wNMwDIKtJzm1jiIVBG8bJcrmP4mcJ2HRUvcY"
          // );
        },
        // setShowDashboard(true),
        alert("Authentication is successful.")

        // axios
        //   .get("http://15.206.127.253/api/v1/partners/?=Token ", {
        //     headers: {
        //       Authorization: "Token " + authenticationToken,
        //     },
        //   })
        //   .then((response) => {
        //     setPartnerData(response.data);
        //     console.log(JSON.stringify(partnerData));
        //     console.log("partner data::  ", partnerData);
        //   })
        //   .then((data) => {
        //     // const transformedData = data.map((siteData) => {
        //     //   return selectMilestone.push({
        //     //     milestone_name: siteData.milestone_name,
        //     //     milestone_id: siteData.milestone_id,
        //     //   });
        //     // });
        //     // setSelectMilesone(transformedData);
        //     console.log("data::", data);
        //     // console.log(selectMilestone[0].milestone_name + "17655");
        //   })
        //   .catch((err) => console.log("Something went wrong.", err))
      )

      .catch((err) => console.log("Something went wrong.", err));
  }
  // useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   setToken(token);
  //   console.log(token);
  //   // var phoneNo = window.localStorage.getItem("phoneNo");
  //   // setPhoneNo(phoneNo);
  //   // var otpMessage = window.localStorage.getItem("otpMessage");
  //   // setOtpMessage(otpMessage);
  //   // const authSuccessful = window.localStorage.getItem("authSuccessful");
  //   // setAuthSuccessful(authSuccessful);
  // }, []);
  useEffect(() => {
    console.log("TOKEN", window.localStorage.getItem("token"));
  }, []);

  // useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   var dashboard = window.localStorage.getItem("show-dashboard");
  //   setShowDashboard(dashboard);
  //   console.log(token);
  //   console.log(dashboard);
  //   console.log(showDashboard);

  //   setToken(token);
  //   var authSuccessful = window.localStorage.getItem("authSuccessful");
  //   setAuthSuccessful(authSuccessful);
  //   console.log(authSuccessful);
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem("token", token);
  //   window.localStorage.setItem("show-dashboard", showDashboard);
  //   window.localStorage.setItem("authSuccessful", authSuccessful);
  // }, [token, showDashboard, authSuccessful]);

  function getUserData(token) {
    setShowDashboard(true);
    axios
      .get(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/partners/?=Token ",
        {
          headers: {
            Authorization: token,
            // Authorization:
            //   "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NTE5MzYwODAsImVtYWlsIjpudWxsLCJvcmlnX2lhdCI6MTY1MTMzMTI4MCwicGhvbmVfbnVtYmVyIjoiKzkxOTg3NjU0MzIxMCIsInVzZXJuYW1lIjoiKzkxOTg3NjU0MzIxMCJ9.gfc7Ur_wNMwDIKtJzm1jiIVBG8bJcrmP4mcJ2HRUvcY",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        setPartnerData(response.data);
        console.log(response.data);
        console.log("partner data::::", partnerData);
        console.log("Data::", data);
        if (partnerData)
          console.log("partner name::  ", partnerData[0].full_name);
      })
      .then((data) => {
        console.log("data::", partnerData);
      })
      .catch((err) => console.log("Something went wrong.", err));
    setAuthSuccessful(!authSuccessful);
  }

  return (
    <section className="container d-flex align-items-center justify-content-center">
      {showVerifyOtp ? (
        <div className="login " style={{ position: "fixed" }}>
          <div className="row ">
            {/* <div className="col left">
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
          </div> */}
            <div className="col right">
              <img
                src="assets/img/login/login-thekabook.png"
                alt="Image"
                className="img-fluid img"
                style={{ marginTop: "260px" }}
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
                  marginTop: "44px",
                  marginBottom: "52px",
                  fontColor: "#000000",
                }}
              >
                Please Enter OTP send to your Mobile Number
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
                        marginTop: "24px",
                        fontColor: "#808080",
                      }}
                    >
                      Enter 4 digit OTP Number:
                    </span>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Enter OTP"
                        variant="outlined"
                        style={{ width: "250px" }}
                        type="number"
                        onChange={(e) => setOtpMessage(e.target.value)}
                      />
                    </Box>
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
                    onClick={verifyOtpFunction}
                  >
                    Verify&nbsp;OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="login " style={{ position: "fixed" }}>
          <div className="row ">
            <div className="col right">
              <img
                src="assets/img/login/login-thekabook.png"
                alt="Image"
                className="img-fluid img"
                style={{ marginTop: "260px" }}
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
                  marginTop: "44px",
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
                        marginTop: "24px",
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
                    onClick={sendOtpFunction}
                  >
                    Send&nbsp;OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Splogin;
