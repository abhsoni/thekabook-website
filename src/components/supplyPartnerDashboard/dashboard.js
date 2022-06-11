import { useState, useEffect } from "react";
// import SearchCity from "./searchCity";

import Header from "./header";
import Home from "./home";
import Project from "./project";
import Splogin from "./spLogin";

function Dashboard(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const [showDashboard, setShowDashboard] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [partnerData, setPartnerData] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [partnersId, setPartnersId] = useState([]);
  const [requirement, setRequirement] = useState("");
  const [expectedBusiness, setExpectedBusiness] = useState("");
  const [userName, setUserName] = useState(null);
  const [authSuccessful, setAuthSuccessful] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // const token = window.localStorage.getItem("token");
    var dashboard = window.localStorage.getItem("show-dashboard");
    console.log("token: ", window.localStorage.getItem("token"));
    console.log("partnerData: ", partnerData);
    console.log("tokendsfdsfsdfs: ", window.localStorage.getItem("token"));
    setIsAuth(window.localStorage.getItem("token") === null ? false : true);
    // console.log(token);
    console.log(showDashboard);

    // setToken(token);
    // var authSuccessful = window.localStorage.getItem("authSuccessful");
    // setAuthSuccessful(authSuccessful);
    // console.log(authSuccessful);
  }, []);
  useEffect(() => {
    // window.localStorage.setItem("token", token);
    window.localStorage.setItem("show-dashboard", showDashboard);
    // window.localStorage.setItem("authSuccessful", authSuccessful);
  }, [showDashboard, authSuccessful]);
  console.log("isAuth:", isAuth);
  return (
    <>
      <Header userName={userName} setUserName={setUserName} />
      {/* <Splogin setShowDashboard={setShowDashboard} /> */}
      {/* {showDashboard && partnerData && authSuccessful ? ( */}
      {isAuth ? (
        <>
          {/* <SearchCity
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          /> */}

          <Home
            partnerData={partnerData}
            userName={userName}
            setUserName={setUserName}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            requirement={requirement}
            setRequirement={setRequirement}
            expectedBusiness={expectedBusiness}
            setExpectedBusiness={setExpectedBusiness}
            partnersId={partnersId}
            setPartnersId={setPartnersId}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />

          <Project
            selectedCategory={selectedCategory}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            requirement={requirement}
            setRequirement={setRequirement}
            expectedBusiness={expectedBusiness}
            setExpectedBusiness={setExpectedBusiness}
            partnersId={partnersId}
            setPartnersId={setPartnersId}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </>
      ) : (
        <Splogin
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
          partnerData={partnerData}
          setPartnerData={setPartnerData}
          userName={userName}
          setUserName={setUserName}
          authSuccessful={authSuccessful}
          setAuthSuccessful={setAuthSuccessful}
        />
      )}
      {/* <Home />
      <Project /> */}
    </>
  );
}

export default Dashboard;
