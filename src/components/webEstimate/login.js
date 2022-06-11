import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import { yellow } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import InputLabel from "@mui/material/InputLabel";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
// import { ImageList } from "@mui/material";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const names = ["tony", "elias", "fadi"];
const images = [
  "assets/img/login/s-1.png",
  "assets/img/login/s-2.png",
  "assets/img/login/s-3.png",
  "assets/img/login/s-4.png",
  "assets/img/login/s-5.png",
];
const floorNumber = [
  "1.0",
  "1.5",
  "2.0",
  "2.5",
  "3.0",
  "3.5",
  "4.0",
  "5.0",
  "6.0",
];
const quotes = [
  "Directly Procure from manufacturers at Best Prices",
  " Share detailed estimates & agreements in a click",
  "Compare quotations in 1 hour",
  "Tag your team and Record your Photos & Payments.",
  "100% safe, secure & private. Only you can view your data.",
];
const delay = 3500;
function Login() {
  const [phoneNo, setPhoneNo] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [estimatePageNo, setEstimatePageNo] = useState("1");
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  const [authSuccessful, setAuthSuccessful] = useState(false);
  const [showEstimatePage, setShowEstimatePage] = useState("0");
  const [isLoading, setIsLoading] = useState(false);

  const [token, setToken] = useState(null);
  const [index, setIndex] = useState(0);

  const [client_name, setClient_name] = useState("");
  const [project_location, setProject_location] = useState("");
  const [city, setCity] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [building_type, setBuilding_type] = useState("residential");
  const [checked, setChecked] = useState([true, false, false]);
  const [contractChecked, setContractChecked] = useState([true, false, false]);
  const [constructionChecked, setConstructionChecked] = useState([true, false]);
  const [contract_type, setContract_type] = useState("material");
  const [construction_type, setConstruction_type] = useState("new");
  const [project_start_date, setProjectStartDate] = useState(null);
  const [floors, setFloors] = useState("1.0");
  const [rooms, setRooms] = useState(0);
  const [toilets, setToilets] = useState(0);
  const [balcony, setBalcony] = useState(0);
  const [full_name, setFullName] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [project_name, setProject_name] = useState("");
  const [webEstimate, setWebEstimate] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [profileCity, setProfileCity] = useState("");
  const [address, setAddress] = useState("");
  const [work_line, setWorkLine] = useState("contractor");
  const [whoAreYou, setWhoAreYou] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [utility_areas, setUtility_areas] = useState(0);
  const [estimated_plinth_area, setEstimated_plinth_area] = useState();
  const [estimated_constructed_area, setEstimated_constructed_area] =
    useState();
  const [profit_percent, setProfit_percent] = useState("");

  const timeoutRef = useRef(null);
  const [selectedBudget, setSelectedBudget] = useState("builder");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuth);
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
          window.localStorage.setItem(
            "phone_number_format",
            phone_number_format
          );
          console.log(window.localStorage.getItem("phone_number_format"));
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
          // dispatch(authActions.login());
          dispatch(authActions.login());
          var authTokenData = `Token ${response.data.auth_token}`;
          console.log("Authentication is Successful: ", authTokenData);
          console.log("this is from authenticationToken: ", authTokenData);
          console.log(`authentication_token::&& ${authTokenData}`);
          window.location.reload();
          if (authToken) {
            window.localStorage.setItem("token", authTokenData);
            setToken(authTokenData);
            refreshPage();
            // window.location.reload();
          }
        },

        alert("Authentication is successful.")
      )

      .catch((err) => console.log("Something went wrong.", err));
  }
  function refreshPage() {
    window.location.reload();
    console.log("Refresh is triggered.");
  }
  function patchProjectInfo(id) {
    axios
      .patch(
        `https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/project-info/${id}/`,
        {
          boq_agreement: true,
          pricing: selectedBudget,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then(
        (response) => {
          const total_project_cost = response.data.total_project_cost;

          console.log("Your total project cost is: ", total_project_cost);
        },

        alert(
          "Your Project is created. Please download the app to view this project estimate."
        )
      )

      .catch((err) => console.log("Something went wrong.", err));
  }
  function postProjectInfo() {
    axios
      .post(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/project-info/",
        {
          client_name: client_name,
          project_name: project_name,
          project_location: project_location,
          building_type: building_type,
          construction_type: construction_type,
          contract_type: contract_type,
          floors: floors,
          rooms: rooms,
          toilets: toilets,
          balcony: balcony,
          utility_areas: utility_areas,
          estimated_constructed_area: estimated_constructed_area,
          project_start_date: project_start_date.toISOString().split("T")[0],
          profit_percent: profit_percent,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then(
        (response) => {
          const id = response.data.project_id;
          if (id) {
            window.localStorage.setItem("project_id", id);
            patchProjectInfo(id);
          }
          // console.log(response.data.auth_token);
          // // authenticationToken = "Token" + "/n" + authToken;
          // // authentication_token = "Token " + authToken;
          // setAuthSuccessful(true);
          // var authTokenData = `Token ${response.data.auth_token}`;
          console.log(
            "Your data has been posted: Here is the respone:   ",
            response.data
          );
          // console.log("this is from authenticationToken: ", authTokenData);
          // console.log(`authentication_token::&& ${authTokenData}`);
          // if (authToken) {
          //   window.localStorage.setItem("token", authTokenData);
          //   // localStorage.setItem("auth_token", authTokenData);
          //   getUserData(authTokenData);
          //   window.location.reload();
          // }

          // if (authToken) setToken(authTokenData);
        },

        alert("Your Project Id is created.")
      )

      .catch((err) => console.log("Something went wrong.", err));
  }

  // const loginHandler = () => {
  //   dispatch({ type: "login" });
  // };
  // if (window.localStorage.getItem("token")) {
  //   dispatch(authActions.login());
  //   console.log("11111111111");
  // }
  // if (true) {
  //   window.localStorage.removeItem("token");
  //   window.localStorage.removeItem("phone_number_format");
  //   // window.location.reload();
  // }
  // if (window.localStorage.getItem("project_id")) {
  //   ()=>{}
  // }
  // if (window.localStorage.getItem("project_id")) {
  //   console.log(window.localStorage.getItem("project_id"));
  //   getEstimateTable(window.localStorage.getItem("project_id"));
  // }
  function postProfileData() {
    axios
      .post(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/profile/",
        {
          full_name: full_name,
          company_name: company_name,
          city: profileCity,
          work_line: work_line,
          language_preference: "english",
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .then((data) => {
        console.log("Your profile data has been sent.");
        // console.log(webEstimate);
      })
      .catch((err) => console.log("Something went wrong.", err));
  }
  // function getEstimateTable() {
  //   setIsLoading(true);
  //   axios
  //     .get(`http://15.206.127.253/generate-contract/406/`)
  //     .then((response) => {
  //       // setWebEstimate(response.data);
  //       // setProjectId(siteAddress[0].id);
  //       // return response.data;
  //       console.log(response.data);
  //       setIsLoading(false);
  //     })
  //     .then((data) => {
  //       // const transformedData = data.map((siteData) => {
  //       //   return siteAddress.push(siteData.project_name);
  //       // });
  //       // setSiteAddress(transformedData);
  //       // arrSite = transformedData;
  //       console.log("Your web estimate is here.");
  //       // console.log(webEstimate);
  //     })
  //     .catch((err) => console.log("Something went wrong.", err));

  //   // axios
  //   //   .get(
  //   //     `http://15.206.127.253/api/v1/project-info/404/`,
  //   //     {  },
  //   //     {
  //   //       headers: {
  //   //         Authorization: window.localStorage.getItem("token"),
  //   //       },
  //   //     }
  //   //   )
  //   //   .then(
  //   //     (response) => {
  //   //       const table = response.data;
  //   //       if (table) {
  //   //         window.localStorage.setItem("webEstimateTable", table);
  //   //         setWebEstimate(table);
  //   //       }
  //   //       // console.log(response.data.auth_token);
  //   //       // // authenticationToken = "Token" + "/n" + authToken;
  //   //       // // authentication_token = "Token " + authToken;
  //   //       // setAuthSuccessful(true);
  //   //       // var authTokenData = `Token ${response.data.auth_token}`;
  //   //       console.log("Your Table is here ", response.data);
  //   //       // console.log("this is from authenticationToken: ", authTokenData);
  //   //       // console.log(`authentication_token::&& ${authTokenData}`);
  //   //       // if (authToken) {
  //   //       //   window.localStorage.setItem("token", authTokenData);
  //   //       //   // localStorage.setItem("auth_token", authTokenData);
  //   //       //   getUserData(authTokenData);
  //   //       //   window.location.reload();
  //   //       // }

  //   //       // if (authToken) setToken(authTokenData);
  //   //     },

  //   //     alert("Table is Successfully fatched.")
  //   //   )

  //   //   .catch((err) => console.log("Something went wrong.", err));
  // }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const [newQuote, setnewQuote] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setnewQuote(quotes[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3500);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  const textQuote = (
    <div
      style={{
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: "24px",
        marginTop: "52px",
        fontColor: "#000000",
      }}
    >
      {quotes[index]}
    </div>
  );

  const loginPage = (
    <div className="row">
      <div className="col"></div>
      <div
        className="col"
        style={{
          textAlign: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "480px",
          height: "686px",
          background: "#ffffff",
          borderRadius: "24px",
        }}
      >
        {/* <div className="col right"> */}
        <img
          src="assets/img/login/login-thekabook.png"
          alt="Image"
          className="img-fluid img"
          style={{ marginTop: "48px", maxWidth: "280px" }}
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
            marginBottom: "44px",
            fontColor: "#000000",
          }}
        >
          Please Login to continue
        </div>
        <div>
          <div className="row " style={{ textAlign: "center" }}>
            <div className="col"></div>
            <div className="col">
              <div className="row">
                <div className="col"></div>
                <div className="col" style={{ textAlign: "start" }}>
                  <span
                    style={{
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
        <div style={{ marginTop: "40px" }}>
          <svg
            width="142"
            height="51"
            viewBox="0 0 142 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.8882 9.27464V23.5231C46.8882 36.4992 38.0763 47.8138 25.4893 51C12.9233 47.8243 4.11133 36.4992 4.11133 23.5231V9.27464C14.0064 8.16 19.6111 4.39546 25.4998 0C31.3884 4.39546 36.9932 8.16 46.8882 9.27464Z"
              fill="#F9C710"
            />
            <path
              d="M25.4991 45.3742C16.0247 42.3667 9.51562 33.5758 9.51562 23.523V13.8698C16.1719 12.4187 21.0616 9.73725 25.4991 6.67725C30.0313 9.82137 34.8263 12.4502 41.4826 13.8803V23.5335C41.4826 33.5758 34.9736 42.3667 25.4991 45.3742Z"
              fill="#DEAE00"
            />
            <path
              d="M21.956 34.2173L15.5215 27.7827L18.0367 24.9456L21.956 28.8544L31.6408 19.1802L34.3117 21.8511L21.956 34.2173Z"
              fill="white"
            />
            <path
              d="M64.9825 10.961V20.761H63.1625V12.487H61.0905V10.961H64.9825ZM71.1645 20.901C70.3805 20.901 69.6805 20.705 69.0645 20.313C68.4485 19.9117 67.9632 19.333 67.6085 18.577C67.2539 17.8117 67.0765 16.9063 67.0765 15.861C67.0765 14.8157 67.2539 13.915 67.6085 13.159C67.9632 12.3937 68.4485 11.815 69.0645 11.423C69.6805 11.0217 70.3805 10.821 71.1645 10.821C71.9485 10.821 72.6485 11.0217 73.2645 11.423C73.8899 11.815 74.3799 12.3937 74.7345 13.159C75.0892 13.915 75.2665 14.8157 75.2665 15.861C75.2665 16.9063 75.0892 17.8117 74.7345 18.577C74.3799 19.333 73.8899 19.9117 73.2645 20.313C72.6485 20.705 71.9485 20.901 71.1645 20.901ZM71.1645 19.319C71.8645 19.319 72.4152 19.0297 72.8165 18.451C73.2272 17.8723 73.4325 17.009 73.4325 15.861C73.4325 14.713 73.2272 13.8497 72.8165 13.271C72.4152 12.6923 71.8645 12.403 71.1645 12.403C70.4739 12.403 69.9232 12.6923 69.5125 13.271C69.1112 13.8497 68.9105 14.713 68.9105 15.861C68.9105 17.009 69.1112 17.8723 69.5125 18.451C69.9232 19.0297 70.4739 19.319 71.1645 19.319ZM80.7345 20.901C79.9505 20.901 79.2505 20.705 78.6345 20.313C78.0185 19.9117 77.5331 19.333 77.1785 18.577C76.8238 17.8117 76.6465 16.9063 76.6465 15.861C76.6465 14.8157 76.8238 13.915 77.1785 13.159C77.5331 12.3937 78.0185 11.815 78.6345 11.423C79.2505 11.0217 79.9505 10.821 80.7345 10.821C81.5185 10.821 82.2185 11.0217 82.8345 11.423C83.4598 11.815 83.9498 12.3937 84.3045 13.159C84.6591 13.915 84.8365 14.8157 84.8365 15.861C84.8365 16.9063 84.6591 17.8117 84.3045 18.577C83.9498 19.333 83.4598 19.9117 82.8345 20.313C82.2185 20.705 81.5185 20.901 80.7345 20.901ZM80.7345 19.319C81.4345 19.319 81.9851 19.0297 82.3865 18.451C82.7971 17.8723 83.0025 17.009 83.0025 15.861C83.0025 14.713 82.7971 13.8497 82.3865 13.271C81.9851 12.6923 81.4345 12.403 80.7345 12.403C80.0438 12.403 79.4931 12.6923 79.0825 13.271C78.6811 13.8497 78.4805 14.713 78.4805 15.861C78.4805 17.009 78.6811 17.8723 79.0825 18.451C79.4931 19.0297 80.0438 19.319 80.7345 19.319ZM88.4004 16.239C87.7004 16.239 87.1357 15.9917 86.7064 15.497C86.2771 15.0023 86.0624 14.3537 86.0624 13.551C86.0624 12.7483 86.2771 12.0997 86.7064 11.605C87.1357 11.1103 87.7004 10.863 88.4004 10.863C89.1004 10.863 89.6651 11.1103 90.0944 11.605C90.5331 12.0903 90.7524 12.739 90.7524 13.551C90.7524 14.363 90.5331 15.0163 90.0944 15.511C89.6651 15.9963 89.1004 16.239 88.4004 16.239ZM94.2804 10.961H95.6524L88.9604 20.761H87.5884L94.2804 10.961ZM88.4004 15.259C88.7831 15.259 89.0771 15.1097 89.2824 14.811C89.4971 14.5123 89.6044 14.0923 89.6044 13.551C89.6044 13.0097 89.4971 12.5897 89.2824 12.291C89.0771 11.9923 88.7831 11.843 88.4004 11.843C88.0364 11.843 87.7424 11.997 87.5184 12.305C87.3037 12.6037 87.1964 13.019 87.1964 13.551C87.1964 14.083 87.3037 14.503 87.5184 14.811C87.7424 15.1097 88.0364 15.259 88.4004 15.259ZM94.8264 20.859C94.1264 20.859 93.5617 20.6117 93.1324 20.117C92.7031 19.6223 92.4884 18.9737 92.4884 18.171C92.4884 17.3683 92.7031 16.7197 93.1324 16.225C93.5617 15.7303 94.1264 15.483 94.8264 15.483C95.5264 15.483 96.0911 15.7303 96.5204 16.225C96.9591 16.7197 97.1784 17.3683 97.1784 18.171C97.1784 18.9737 96.9591 19.6223 96.5204 20.117C96.0911 20.6117 95.5264 20.859 94.8264 20.859ZM94.8264 19.879C95.1997 19.879 95.4937 19.7297 95.7084 19.431C95.9231 19.123 96.0304 18.703 96.0304 18.171C96.0304 17.639 95.9231 17.2237 95.7084 16.925C95.4937 16.617 95.1997 16.463 94.8264 16.463C94.4531 16.463 94.1591 16.6123 93.9444 16.911C93.7297 17.2097 93.6224 17.6297 93.6224 18.171C93.6224 18.7123 93.7297 19.1323 93.9444 19.431C94.1591 19.7297 94.4531 19.879 94.8264 19.879ZM65.3325 36.901C64.5765 36.901 63.8438 36.7937 63.1345 36.579C62.4345 36.3643 61.8792 36.0797 61.4685 35.725L62.0985 34.311C62.4998 34.6283 62.9898 34.8897 63.5685 35.095C64.1565 35.291 64.7445 35.389 65.3325 35.389C66.0605 35.389 66.6018 35.2723 66.9565 35.039C67.3205 34.8057 67.5025 34.4977 67.5025 34.115C67.5025 33.835 67.3998 33.6063 67.1945 33.429C66.9985 33.2423 66.7465 33.0977 66.4385 32.995C66.1305 32.8923 65.7105 32.7757 65.1785 32.645C64.4318 32.4677 63.8252 32.2903 63.3585 32.113C62.9012 31.9357 62.5045 31.6603 62.1685 31.287C61.8418 30.9043 61.6785 30.391 61.6785 29.747C61.6785 29.2057 61.8232 28.7157 62.1125 28.277C62.4112 27.829 62.8545 27.4743 63.4425 27.213C64.0398 26.9517 64.7678 26.821 65.6265 26.821C66.2238 26.821 66.8118 26.8957 67.3905 27.045C67.9692 27.1943 68.4685 27.409 68.8885 27.689L68.3145 29.103C67.8852 28.851 67.4372 28.6597 66.9705 28.529C66.5038 28.3983 66.0512 28.333 65.6125 28.333C64.8938 28.333 64.3572 28.4543 64.0025 28.697C63.6572 28.9397 63.4845 29.2617 63.4845 29.663C63.4845 29.943 63.5825 30.1717 63.7785 30.349C63.9838 30.5263 64.2405 30.6663 64.5485 30.769C64.8565 30.8717 65.2765 30.9883 65.8085 31.119C66.5365 31.287 67.1338 31.4643 67.6005 31.651C68.0672 31.8283 68.4638 32.1037 68.7905 32.477C69.1265 32.8503 69.2945 33.3543 69.2945 33.989C69.2945 34.5303 69.1452 35.0203 68.8465 35.459C68.5572 35.8977 68.1138 36.2477 67.5165 36.509C66.9192 36.7703 66.1912 36.901 65.3325 36.901ZM78.5992 35.235V36.761H71.2492V26.961H78.4032V28.487H73.0692V31.035H77.8012V32.533H73.0692V35.235H78.5992ZM85.2731 36.901C84.2838 36.901 83.3878 36.6863 82.5851 36.257C81.7918 35.8183 81.1664 35.2163 80.7091 34.451C80.2611 33.6857 80.0371 32.8223 80.0371 31.861C80.0371 30.8997 80.2658 30.0363 80.7231 29.271C81.1804 28.5057 81.8058 27.9083 82.5991 27.479C83.4018 27.0403 84.2978 26.821 85.2871 26.821C86.0898 26.821 86.8224 26.961 87.4851 27.241C88.1478 27.521 88.7078 27.927 89.1651 28.459L87.9891 29.565C87.2798 28.7997 86.4071 28.417 85.3711 28.417C84.6991 28.417 84.0971 28.5663 83.5651 28.865C83.0331 29.1543 82.6178 29.5603 82.3191 30.083C82.0204 30.6057 81.8711 31.1983 81.8711 31.861C81.8711 32.5237 82.0204 33.1163 82.3191 33.639C82.6178 34.1617 83.0331 34.5723 83.5651 34.871C84.0971 35.1603 84.6991 35.305 85.3711 35.305C86.4071 35.305 87.2798 34.9177 87.9891 34.143L89.1651 35.263C88.7078 35.795 88.1431 36.201 87.4711 36.481C86.8084 36.761 86.0758 36.901 85.2731 36.901ZM95.2046 36.901C93.8513 36.901 92.7966 36.523 92.0406 35.767C91.2846 35.0017 90.9066 33.9097 90.9066 32.491V26.961H92.7266V32.421C92.7266 34.3437 93.5573 35.305 95.2186 35.305C96.8706 35.305 97.6966 34.3437 97.6966 32.421V26.961H99.4886V32.491C99.4886 33.9097 99.1106 35.0017 98.3546 35.767C97.6079 36.523 96.5579 36.901 95.2046 36.901ZM108.599 36.761L106.597 33.891C106.513 33.9003 106.387 33.905 106.219 33.905H104.007V36.761H102.187V26.961H106.219C107.069 26.961 107.806 27.101 108.431 27.381C109.066 27.661 109.551 28.0623 109.887 28.585C110.223 29.1077 110.391 29.7283 110.391 30.447C110.391 31.1843 110.209 31.819 109.845 32.351C109.491 32.883 108.977 33.2797 108.305 33.541L110.559 36.761H108.599ZM108.557 30.447C108.557 29.8217 108.352 29.341 107.941 29.005C107.531 28.669 106.929 28.501 106.135 28.501H104.007V32.407H106.135C106.929 32.407 107.531 32.239 107.941 31.903C108.352 31.5577 108.557 31.0723 108.557 30.447ZM119.928 35.235V36.761H112.578V26.961H119.732V28.487H114.398V31.035H119.13V32.533H114.398V35.235H119.928ZM122.107 26.961H126.391C127.436 26.961 128.365 27.1663 129.177 27.577C129.989 27.9783 130.619 28.5523 131.067 29.299C131.515 30.0363 131.739 30.8903 131.739 31.861C131.739 32.8317 131.515 33.6903 131.067 34.437C130.619 35.1743 129.989 35.7483 129.177 36.159C128.365 36.5603 127.436 36.761 126.391 36.761H122.107V26.961ZM126.307 35.221C127.025 35.221 127.655 35.0857 128.197 34.815C128.747 34.535 129.167 34.143 129.457 33.639C129.755 33.1257 129.905 32.533 129.905 31.861C129.905 31.189 129.755 30.601 129.457 30.097C129.167 29.5837 128.747 29.1917 128.197 28.921C127.655 28.641 127.025 28.501 126.307 28.501H123.927V35.221H126.307Z"
              fill="#3E4450"
            />
          </svg>
        </div>
        {/* </div> */}
      </div>
      <div className="col"></div>
    </div>
  );

  const verifyOtpPage = (
    <div className="row">
      <div className="col"></div>
      <div
        className="col right"
        style={{
          textAlign: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "480px",
          height: "686px",
          background: "#ffffff",
          borderRadius: "24px",
        }}
      >
        <img
          src="assets/img/login/login-thekabook.png"
          alt="Image"
          className="img-fluid img"
          style={{ marginTop: "60px" }}
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
      <div className="col"></div>
    </div>
  );
  // let showEstimatePage;

  const handleChange1 = (event) => {
    setChecked([event.target.checked, false, false]);
    const residential = "residential";
    setBuilding_type(residential);
    console.log(building_type);
  };

  const handleChange2 = (event) => {
    setChecked([false, event.target.checked, false]);
    const commercial = "commercial";
    setBuilding_type(commercial);
    console.log(building_type);
  };

  const handleChange3 = (event) => {
    setChecked([false, false, event.target.checked]);
    const resiCommercial = "resi_commercial";
    setBuilding_type(resiCommercial);
    console.log(building_type);
  };

  const handleChange4 = (event) => {
    setContractChecked([event.target.checked, false, false]);
    const contractType = "material";
    setContract_type(contractType);
    console.log(contract_type);
  };

  const handleChange5 = (event) => {
    setContractChecked([false, event.target.checked, false]);
    const contractType = "labour";
    setContract_type(contractType);
    console.log(contract_type);
  };

  const handleChange6 = (event) => {
    setContractChecked([false, false, event.target.checked]);
    const contractType = "supervision";
    setContract_type(contractType);
    console.log(contract_type);
  };

  const handleChange7 = (event) => {
    setConstructionChecked([event.target.checked, false]);
    const constructionType = "new";
    setConstruction_type(constructionType);
    console.log(construction_type);
  };
  const handleChange8 = (event) => {
    setConstructionChecked([false, event.target.checked]);
    const constructionType = "extension";
    setConstruction_type(constructionType);
    console.log(construction_type);
  };
  useEffect(() => {
    console.log(building_type);
    console.log(contract_type);
    console.log(client_name);
    console.log(construction_type);
    console.log(estimated_plinth_area);
    console.log(estimated_constructed_area);
    console.log(profit_percent);
    console.log(rooms);
    console.log(floors);
    console.log(toilets);
    console.log(balcony);
    console.log(utility_areas);
    console.log(project_start_date);
    console.log(project_location);
    console.log(work_line);
    console.log(full_name);
    console.log(address);
    console.log(profileCity);
    console.log(selectedBudget);
    console.log(window.localStorage.getItem("token"));
    setIsAuthenticated(
      window.localStorage.getItem("token") === null ? false : true
    );
  }, [
    building_type,
    contract_type,
    construction_type,
    estimated_plinth_area,
    estimated_constructed_area,
    profit_percent,
    work_line,
    selectedBudget,
  ]);
  const navigate = useNavigate();
  const estimatePage0 = (
    <div
      key={"0"}
      className="col"
      // style={{ textAlign: "center", margin: "0 auto" }}
    >
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="login-h3">Setup your profile</div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "360px",
                borderRadius: "8px",
                height: "60px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              value={full_name}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              // sx={{
              //   width: 360,
              // }}
            />
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              value={company_name}
              // sx={{
              //   width: 360,
              // }}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Office Address"
              variant="outlined"
              value={address}
              // sx={{
              //   width: 360,
              // }}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter City"
              variant="outlined"
              value={profileCity}
              onChange={(e) => {
                setProfileCity(e.target.value);
              }}
            />
          </Box>

          <div className="login-h3" style={{ marginTop: "20px" }}>
            Who are you ?
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={whoAreYou[0]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={(event) => {
                      setWhoAreYou([
                        event.target.checked,
                        false,
                        false,
                        false,
                        false,
                      ]);
                      const profileType = "contractor";
                      setWorkLine(profileType);
                      console.log(work_line);
                    }}
                  />
                }
                label="CONTRACTOR"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={whoAreYou[1]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={(event) => {
                      setWhoAreYou([
                        false,
                        event.target.checked,

                        false,
                        false,
                        false,
                      ]);
                      const profileType = "architect";
                      setWorkLine(profileType);
                      console.log(work_line);
                    }}
                  />
                }
                label="ARCHITECT"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={whoAreYou[2]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={(event) => {
                      setWhoAreYou([
                        false,
                        false,
                        event.target.checked,
                        false,
                        false,
                      ]);
                      const profileType = "sub-contractor";
                      setWorkLine(profileType);
                      console.log(work_line);
                    }}
                  />
                }
                label="SUB-CONTRACTOR"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={whoAreYou[3]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={(event) => {
                      setWhoAreYou([
                        false,
                        false,
                        false,
                        event.target.checked,
                        false,
                      ]);
                      const profileType = "supplier";
                      setWorkLine(profileType);
                      console.log(work_line);
                    }}
                  />
                }
                label="SUPPLIER"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={whoAreYou[4]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={(event) => {
                      setWhoAreYou([
                        false,
                        false,
                        false,
                        false,
                        event.target.checked,
                      ]);
                      const profileType = "supervisor";
                      setWorkLine(profileType);
                      console.log(work_line);
                    }}
                  />
                }
                label="SUPERVISOR"
              />
            </FormGroup>
          </div>

          <div style={{ textAlign: "end" }}>
            {" "}
            <div className="button">
              <div className="mobileInput ">
                <div>1/4</div>
                <button
                  // href=""
                  class="btn-get-started scrollto"
                  style={{
                    maxHeight: "42px",
                    border: "0",
                    // marginTop: "12px",
                  }}
                  onClick={() => {
                    if (work_line == "supplier") {
                      navigate("/supply-partner-dashboard");
                    } else if (
                      full_name &&
                      company_name &&
                      address &&
                      profileCity
                    ) {
                      setShowEstimatePage("1");
                    } else {
                      alert("please fill all required fields.");
                    }
                  }}
                >
                  Next <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );

  const estimatePage1 = (
    <div
      key={"1"}
      className="col"
      // style={{ textAlign: "center", margin: "0 auto" }}
    >
      <div className="row">
        <div className="col" style={{ textAlign: "end", fontSize: "28px" }}>
          <a
            href=""
            style={{ color: "#000000" }}
            onClick={(e) => {
              setShowEstimatePage("0");
              e.preventDefault();
            }}
          >
            <i class="bi bi-arrow-left"></i>
          </a>
        </div>
        <div className="col">
          <div className="login-h3">Enter the detail to get Estimate (BOQ)</div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "360px",
                borderRadius: "8px",
                height: "60px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Client Name"
              variant="outlined"
              value={client_name}
              onChange={(e) => {
                setClient_name(e.target.value);
              }}
              // sx={{
              //   width: 360,
              // }}
            />
            <TextField
              id="outlined-basic"
              label="Project Name"
              variant="outlined"
              value={project_name}
              onChange={(e) => {
                setProject_name(e.target.value);
              }}
              // sx={{
              //   width: 360,
              // }}
            />
            <TextField
              id="outlined-basic"
              label="Site Address"
              variant="outlined"
              value={project_location}
              // sx={{
              //   width: 360,
              // }}
              onChange={(e) => {
                setProject_location(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter City"
              variant="outlined"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Box>
          <div className="login-h4">Building Type</div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[0]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange1}
                  />
                }
                label="Residential"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[1]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange2}
                  />
                }
                label="Commercial"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[2]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange3}
                  />
                }
                label="Resi-commercial"
              />
            </FormGroup>
          </div>
          <div className="login-h4">Contract Type</div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contractChecked[0]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange4}
                  />
                }
                label="With Material (turnkey)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contractChecked[1]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange5}
                  />
                }
                label="Labour only"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={contractChecked[2]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange6}
                  />
                }
                label="Supervision"
              />
            </FormGroup>
          </div>
          <div className="login-h4">Construction Type</div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={constructionChecked[0]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange7}
                  />
                }
                label="New Project"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={constructionChecked[1]}
                    sx={{
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                    onChange={handleChange8}
                  />
                }
                label="Extension Project"
              />
            </FormGroup>
          </div>
          <div style={{ textAlign: "end" }}>
            {" "}
            <div className="button">
              <div className="mobileInput ">
                <div>2/4</div>
                <button
                  // href=""
                  class="btn-get-started scrollto"
                  style={{
                    maxHeight: "42px",
                    border: "0",
                    // marginTop: "12px",
                  }}
                  onClick={() => {
                    if (
                      client_name &&
                      project_name &&
                      project_location &&
                      city
                    ) {
                      setShowEstimatePage("2");
                    } else {
                      alert("please fill all required fields.");
                    }
                  }}
                >
                  Next <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );

  // showEstimatePage = estimatePage1;
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  let xvlaue = range(0, 30);

  const estimatePage2 = (
    <div
      key={"2"}
      className="col"
      // style={{ textAlign: "center", margin: "0 auto" }}
    >
      <div className="row">
        {" "}
        <div className="col" style={{ textAlign: "end", fontSize: "28px" }}>
          <a
            href=""
            style={{ color: "#000000" }}
            onClick={(e) => {
              setShowEstimatePage("1");
              e.preventDefault();
            }}
          >
            <i class="bi bi-arrow-left"></i>
          </a>
        </div>
        <div className="col">
          <div className="login-h3" style={{ whiteSpace: "nowrap" }}>
            Enter the detail to get Estimate (BOQ)
          </div>

          <div className="login-h4">Project kab Shuru hoga (approx.)</div>
          <div style={{ marginTop: "12px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="mm-dd-yyyy"
                value={project_start_date}
                onChange={(e) => {
                  setProjectStartDate(e);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div className="login-h4">No. of floors</div>
          <div>
            <FormControl sx={{ width: 100, marginTop: 1 }} size="small">
              <InputLabel id="demo-select-small">Count</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={floors}
                label="Select Milestone"
                onChange={(event) => {
                  setFloors(event.target.value);
                }}
              >
                {floorNumber.map((number) => {
                  return <MenuItem value={number}>{number}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className="login-h4">
            No. of Rooms (incl. bedroom, Kitchen, lounge etc.)
          </div>
          <div>
            <FormControl sx={{ width: 100, marginTop: 1 }} size="small">
              <InputLabel id="demo-select-small">Count</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={rooms}
                label="Select Milestone"
                onChange={(event) => {
                  setRooms(event.target.value);
                }}
              >
                {xvlaue.map((number) => {
                  return <MenuItem value={number}>{number}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className="login-h4">No. of Toilets </div>
          <div>
            <FormControl sx={{ width: 100, marginTop: 1 }} size="small">
              <InputLabel id="demo-select-small">Count</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={toilets}
                label="Select Milestone"
                onChange={(event) => {
                  setToilets(event.target.value);
                }}
              >
                {xvlaue.map((number) => {
                  return <MenuItem value={number}>{number}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className="login-h4">No. of Balcony & Wash Area</div>
          <div>
            <FormControl sx={{ width: 100, marginTop: 1 }} size="small">
              <InputLabel id="demo-select-small">Count</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={balcony}
                label="Select Milestone"
                onChange={(event) => {
                  setBalcony(event.target.value);
                }}
              >
                {xvlaue.map((number) => {
                  return <MenuItem value={number}>{number}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className="login-h4">
            No. of Utilities (Lobby, Foyer, Store, Puja)
          </div>
          <div>
            <FormControl sx={{ width: 100, marginTop: 1 }} size="small">
              <InputLabel id="demo-select-small">Count</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={utility_areas}
                label="Select Milestone"
                onChange={(event) => {
                  setUtility_areas(event.target.value);
                }}
              >
                {xvlaue.map((number) => {
                  return <MenuItem value={number}>{number}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className="login-h4">Plinth Area</div>
          <div>
            <div style={{ display: "inline-block" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    mt: 1,
                    width: "100px",
                    borderRadius: "8px",
                    // height: "40px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-number"
                  label="Area in sft"
                  type="number"
                  value={estimated_plinth_area}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  size="small"
                  onChange={(e) => {
                    setEstimated_plinth_area(e.target.value);
                  }}
                />
              </Box>
            </div>
            <div style={{ display: "inline-block" }}>
              <FormControl
                sx={{
                  width: 100,
                  height: "48px",
                  marginTop: 1,
                  marginLeft: "30px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small">Unit</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={"sft"}
                  label="Select Milestone"
                  onChange={(event) => {
                    // setMistryCount(event.target.value);
                  }}
                >
                  <MenuItem value={"sft"}>sft</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="login-h4">Constructed Area (Chat Napti)</div>
          <div>
            <div style={{ display: "inline-block" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    mt: 1,
                    width: "100px",
                    borderRadius: "8px",
                    // height: "40px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-number"
                  label="Area in sft"
                  type="number"
                  value={estimated_constructed_area}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  size="small"
                  onChange={(e) => {
                    setEstimated_constructed_area(e.target.value);
                  }}
                />
              </Box>
            </div>
            <div style={{ display: "inline-block" }}>
              <FormControl
                sx={{
                  width: 100,
                  height: "48px",
                  marginTop: 1,
                  marginLeft: "30px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small">Unit</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={"sft"}
                  label="Select Milestone"
                  onChange={(event) => {
                    // setMistryCount(event.target.value);
                  }}
                >
                  <MenuItem value={"sft"}>sft</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="login-h4">Profit Traget</div>
          <div>
            <div style={{ display: "inline-block" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    mt: 1,
                    width: "100px",
                    borderRadius: "8px",
                    // height: "40px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-number"
                  label="Profit Target"
                  type="number"
                  placeholder="eg: 10%"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  size="small"
                  value={profit_percent}
                  onChange={(e) => {
                    setProfit_percent(e.target.value);
                  }}
                  InputProps={{ inputProps: { min: 0, max: 100 } }}
                />
              </Box>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            {" "}
            <div className="button">
              <div className="mobileInput ">
                <div>3/4</div>
                <button
                  // href=""
                  class="btn-get-started scrollto"
                  style={{
                    maxHeight: "42px",
                    border: "0",
                    // marginTop: "12px",
                  }}
                  onClick={() => {
                    if (
                      project_start_date &&
                      floors &&
                      rooms &&
                      toilets &&
                      balcony &&
                      utility_areas &&
                      estimated_constructed_area &&
                      profit_percent
                    ) {
                      setShowEstimatePage("3");
                    } else {
                      alert("please fill all required fields.");
                    }
                  }}
                >
                  Next <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
  const budgetHandler = (event) => {
    event.preventDefault();
    if (event.target.value === "economy") {
      setSelectedBudget("economy");
    }
    if (event.target.value === "regular") {
      setSelectedBudget("regular");
    }
    if (event.target.value === "luxury") {
      setSelectedBudget("luxury");
    }
    console.log(event.target.value);
  };
  const estimatePage3 = (
    <div className="col" key={"3"}>
      <div className="row">
        <div className="col" style={{ textAlign: "end", fontSize: "28px" }}>
          <a
            href=""
            style={{ color: "#000000" }}
            onClick={(e) => {
              setShowEstimatePage("2");
              e.preventDefault();
            }}
          >
            <i class="bi bi-arrow-left"></i>
          </a>
        </div>
        <div className="col" style={{ minWidth: "384px" }}>
          <div className="login-h3" style={{ whiteSpace: "nowrap" }}>
            Select Type of Budget
          </div>
          <a
            href=""
            style={{ color: "#000000" }}
            onClick={(e) => {
              e.preventDefault();
              setSelectedBudget("builder");
              console.log(selectedBudget);
            }}
            value={`builder`}
          >
            <div
              className={`d-flex flex-row mt-4 ${
                selectedBudget === "builder"
                  ? "selected-rectangle"
                  : "rectangle"
              }`}
            >
              <div className="rectangle-text">
                Economy ( ₹ 1000 - ₹ 1200 per sft )
              </div>
              <div className=" circle ">
                <i
                  class="bi bi-check-lg"
                  style={{
                    color: `${
                      selectedBudget === "builder" ? "#F9C710" : "#FFFFFF"
                    }`,
                  }}
                ></i>
              </div>
            </div>
          </a>
          <a
            href=""
            style={{ color: "#000000" }}
            onClick={(e) => {
              e.preventDefault();
              setSelectedBudget("regular");
              console.log(selectedBudget);
            }}
            value={"regular"}
          >
            <div
              className={`d-flex flex-row mt-4 ${
                selectedBudget === "regular"
                  ? "selected-rectangle"
                  : "rectangle"
              }`}
            >
              <div className="rectangle-text">
                Regular ( ₹ 1201 - ₹ 1400 per sft )
              </div>
              <div className="circle">
                <i
                  class="bi bi-check-lg"
                  style={{
                    color: `${
                      selectedBudget === "regular" ? "#F9C710" : "#FFFFFF"
                    }`,
                  }}
                ></i>
              </div>
            </div>
          </a>
          <a
            href="#"
            style={{ color: "#000000" }}
            onClick={(e) => {
              e.preventDefault();
              setSelectedBudget("premium");
              console.log(selectedBudget);
            }}
            value={"premium"}
          >
            <div
              className={`d-flex flex-row mt-4 ${
                selectedBudget === "premium"
                  ? "selected-rectangle"
                  : "rectangle"
              }`}
            >
              <div className="rectangle-text">Luxury ( ₹ 1401 + per sft )</div>
              <div className=" circle ">
                <i
                  class="bi bi-check-lg"
                  style={{
                    color: `${
                      selectedBudget === "premium" ? "#F9C710" : "#FFFFFF"
                    }`,
                  }}
                ></i>
              </div>
            </div>
          </a>
          <div style={{ textAlign: "end", marginTop: "30px" }}>
            {" "}
            <div className="button">
              <div className="mobileInput ">
                <div>4/4</div>
                <button
                  // href=""
                  class="btn-get-started scrollto"
                  style={{
                    maxHeight: "42px",
                    border: "0",
                    // marginTop: "12px",
                  }}
                  onClick={() => {
                    setShowEstimatePage("4");
                    postProfileData();
                    postProjectInfo();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
  function sendMeLink() {
    // if (phoneNo.length != 12) {
    //   alert(
    //     "👉Invalid number of digits.\n" +
    //       "🙂 Please enter valid Mobile Number📴."
    //   );
    //   return;
    // }
    // const phone_number_format =
    //   "+" +
    //   phoneNo.substring(0, 2) +
    //   " " +
    //   phoneNo.substring(2, 7) +
    //   "-" +
    //   phoneNo.substring(7, 12);
    // console.log("jkdhkh", phoneNo, " ", phone_number_format);
    axios
      .post(
        "https://prod.thekabook.com/api/v1/app-invite/",
        {
          phone_number: window.localStorage.getItem("phone_number_format"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        (response) => console.log("Successful", response),
        alert("Thank You.\n" + "A message will be sent to you.")
      )
      .catch((err) => console.log("Something went wrong.", err));
  }
  // if (true) {
  //   window.localStorage.removeItem("token");
  //   window.localStorage.removeItem("phone_number_format");
  //   // window.location.reload();
  // }
  const estimatePage4 = (
    <div className="col" style={{ textAlign: "center" }}>
      <div
        style={{
          fontStyle: "normal",
          fontFamily: "Raleway",
          fontSize: "24px",
          fontWeight: "600",
          color: "#000000",
        }}
      >
        Your FREE Estimate is Ready!
      </div>
      <div
        style={{
          fontStyle: "normal",
          fontFamily: "Raleway",
          fontSize: "16px",
          fontWeight: "500",
          color: "#7A7A7A",
          lineHeight: "28px",
          marginTop: "12px",
        }}
      >
        For more details or customizations - <br />
        Download and view your estimate in app for Best Expereince.
      </div>
      <img
        src="assets/img/login/estimate-ready.png"
        style={{ maxWidth: "312px", marginTop: "45px" }}
      ></img>
      <div className="button">
        <div className="mobileInput ">
          <button
            // href=""
            class="btn-get-started scrollto"
            style={{
              maxHeight: "42px",
              border: "0",
              marginTop: "40px",
              width: "225px",
            }}
            onClick={sendMeLink}
          >
            Send me link
          </button>
        </div>
      </div>
      <div className="button">
        <div className="mobileInput ">
          {/* <button
            href="https://play.google.com/store/apps/details?id=com.thekabook"
            class="btn-get-started scrollto"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              maxHeight: "42px",
              border: "0",
              marginTop: "32px",
              width: "225px",
            }}
            // onClick={getEstimateTable}
          >
            Download Now
          </button> */}
          <a
            href="https://play.google.com/store/apps/details?id=com.thekabook"
            class="btn-get-started scrollto"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              maxHeight: "42px",
              border: "0",
              marginTop: "32px",
              width: "225px",
            }}
          >
            Download Now
          </a>
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
              marginTop: "32px",
              width: "225px",
            }}
            onClick={() => {
              window.localStorage.removeItem("token");
              window.localStorage.removeItem("phone_number_format");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      style={{
        // height: "100vh",
        marginTop: "0px",
        zIndex: "-1",
        background: `${
          isAuthenticated
            ? "linear-gradient(\n    to right, \n    #F3F3F3 0%, \n    #F3F3F3 50%, \n    #ffffff 50%, \n    #ffffff  100%\n"
            : "#F3F3F3"
        }`,
      }}
    >
      <div className="container">
        <div className="row">
          {/* <div className="col" style={{ textAlign: "center" }}>
            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Image"
                    className="login-img"
                    style={{ maxWidth: "440px" }}
                  ></img>
                ))}
              </div>
            </div>
            {textQuote}
            <div className="slideshowDots" style={{ marginTop: "60px" }}>
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div> */}
          {isAuthenticated ? (
            showEstimatePage === "4" ? (
              <div className="col" style={{ textAlign: "center" }}>
                <div>
                  <img
                    src={"assets/img/login/web-estimate.png"}
                    alt=""
                    style={{
                      filter: "blur(2px)",
                      width: "400px",
                      marginTop: "48px",
                      position: "relative",
                      // textAlign: "center",
                      // background: "rgba(0, 0, 0, 0.5)",
                    }}
                  ></img>
                  <div
                    style={{
                      position: "relative",
                      // top: "30%",
                      left: "50%",
                      marginTop: "-300px",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <svg
                      width="52"
                      height="64"
                      viewBox="0 0 52 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.4244 25.6H42.0004V16C42.0004 16 42.0004 0 26.0004 0C10.0004 0 10.0004 16 10.0004 16V25.6H6.57639C4.93841 25.6 3.36752 26.2507 2.2093 27.4089C1.05107 28.5671 0.400391 30.138 0.400391 31.776V57.856C0.408849 59.4884 1.06327 61.0511 2.22057 62.2024C3.37788 63.3537 4.94394 64 6.57639 64H45.4244C47.0624 64 48.6333 63.3493 49.7915 62.1911C50.9497 61.0329 51.6004 59.462 51.6004 57.824V31.776C51.6004 30.138 50.9497 28.5671 49.7915 27.4089C48.6333 26.2507 47.0624 25.6 45.4244 25.6ZM16.4004 17.6C16.4004 12.8 16.4004 6.4 26.0004 6.4C35.6004 6.4 35.6004 12.8 35.6004 17.6V25.6H16.4004V17.6ZM26.0004 51.2C24.7346 51.2 23.4972 50.8246 22.4447 50.1214C21.3923 49.4182 20.572 48.4186 20.0876 47.2492C19.6032 46.0797 19.4764 44.7929 19.7234 43.5514C19.9703 42.3099 20.5799 41.1696 21.4749 40.2745C22.37 39.3795 23.5103 38.7699 24.7518 38.523C25.9933 38.276 27.2801 38.4028 28.4496 38.8872C29.619 39.3716 30.6186 40.1919 31.3218 41.2444C32.025 42.2968 32.4004 43.5342 32.4004 44.8C32.4004 46.4974 31.7261 48.1253 30.5259 49.3255C29.3256 50.5257 27.6978 51.2 26.0004 51.2Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      // top: "30%",
                      left: "50%",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "700",
                      color: "#000000",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Lock
                  </div>
                </div>
              </div>
            ) : (
              <div className="col" style={{ textAlign: "center" }}>
                <div className="slideshow">
                  <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                  >
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Image"
                        className="login-img"
                        style={{ maxWidth: "440px" }}
                      ></img>
                    ))}
                  </div>
                </div>
                {textQuote}
                <div className="slideshowDots" style={{ marginTop: "60px" }}>
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`slideshowDot${
                        index === idx ? " active" : ""
                      }`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )
          ) : null}
          {/* {estimatePage4} */}
          {!isAuthenticated
            ? showVerifyOtp
              ? verifyOtpPage
              : loginPage
            : null}
          {/* {!isAuthenticated ? verifyOtpPage : null} */}
          {isAuthenticated && showEstimatePage === "0" ? estimatePage0 : null}
          {isAuthenticated && showEstimatePage === "1" ? estimatePage1 : null}
          {isAuthenticated && showEstimatePage === "2" ? estimatePage2 : null}
          {isAuthenticated && showEstimatePage === "3" ? estimatePage3 : null}
          {isAuthenticated && showEstimatePage === "4" ? estimatePage4 : null}
          {isLoading ? "Downloading your pdf" : null}
          {/* {isAuth
            ? showEstimatePage
            : showVerifyOtp
            ? verifyOtpPage
            : loginPage} */}

          {/* {!isAuth
            ? showVerifyOtp
              ? verifyOtpPage
              : loginPage
            : showEstimatePage} */}
          {/* {showVerifyOtp && !userLoginState ? verifyOtpPage : loginPage}
          {userLoginState ? estimatePage1 : null} */}
          {/* {loginPage} */}
          {/* {verifyOtpPage} */}
          {/* {estimatePage1} */}
          {/* {estimatePage2} */}
          {/* {estimatePage3} */}
        </div>
      </div>
    </section>
  );
}
export default Login;
