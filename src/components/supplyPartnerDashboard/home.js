import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DatePick from "./date";
import axios, { Axios } from "axios";
import ListItemText from "@mui/material/ListItemText";
import CurrencyFormat from "react-currency-format";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { fetchPlace } from "./fetchPlace";
import CitiesData from "./in.json";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Home(props) {
  const {
    userName,
    setUserName,
    selectedCategory,
    setSelectedCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    requirement,
    expectedBusiness,
    partnersId,
    setPartnersId,
    selectedCity,
    setSelectedCity,
  } = props;
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    setSelectedCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };
  const [partnerName, setPartnerName] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  // const [partnersId, setPartnersId] = useState([]);
  const [checked, setChecked] = React.useState(false);
  // const [selectedCategory, setSelectedCategory] = useState("cement");
  // const [req]
  console.log("This is from Home.js" + partnerData);
  console.log(JSON.stringify(partnerData));
  const [age, setAge] = React.useState("");
  // const [startDate, setStartDate] = React.useState(Date);
  // const [endDate, setEndDate] = React.useState(null);
  const [tableData, setTableData] = React.useState([]);
  const [reqUnit, setReqUnit] = useState("Bags");

  function getPartnerData() {
    axios
      .get(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/partners/?=Token ",
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setPartnerData(response.data);
      })
      .catch((err) => console.log("Something went wrong.", err));
  }

  function getUserName() {
    axios
      .get(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/profile/ ",
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        const data = response.data;
        setUserName(response.data);
        console.log(response.data);
      })
      .then((data) => {
        // const transformedData = data.map((siteData) => {
        //   return selectMilestone.push({
        //     milestone_name: siteData.milestone_name,
        //     milestone_id: siteData.milestone_id,
        //   });
        // });
        // setSelectMilesone(transformedData);
        console.log("username::", userName);
        // console.log(selectMilestone[0].milestone_name + "17655");
      })
      .catch((err) => console.log("Something went wrong.", err));
    // setAuthSuccessful(!authSuccessful);
  }

  function fetchProjectSiteHandler() {
    axios
      .get(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/supplier-dashboard/"
      )
      .then((response) => {
        setTableData(response.data);

        // setProjectId(siteAddress[0].id);
        // return response.data;
      })
      .then((data) => {
        // const transformedData = data.map((siteData) => {
        //   return siteAddress.push(siteData.project_name);
        // });
        // setSiteAddress(transformedData);
        // arrSite = transformedData;
        console.log(tableData[0]);
        console.log(tableData[0]);
      })
      .catch((err) => console.log("Something went wrong.", err));
  }

  useEffect(() => {
    getPartnerData();
    getUserName();
    fetchProjectSiteHandler();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (
      event.target.value === "putty" ||
      event.target.value === "primer" ||
      event.target.value === "paint"
    ) {
      setReqUnit("Liter");
    }
    if (event.target.value === "sand" || event.target.value === "aggregate") {
      setReqUnit("Cum");
    }
    if (event.target.value === "cement") {
      setReqUnit("Bags");
    }
    if (event.target.value === "steel") {
      setReqUnit("Kg");
    }
  };
  // const handleChange = (event) => {

  // };
  function partnerFilterHandler(event) {
    setChecked(!checked);
    const {
      target: { value },
    } = event;
    setPartnerName(
      // for(let x in partnersId){
      //   if()
      // }
      // event.target.value
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setPartnersId(
      // event.target.id
      typeof value === "number" ? value.split(",") : value
    );
    // if (partnersId) {
    //   for (let x in partnerData) {
    //     if (partnerData[x].id === value) setPartnerName(partnerData[x].name);
    //   }
    // }
    // if (partnerName) setChecked(!checked);
    console.log("partner id:::" + partnersId);
    console.log("partner name:::" + partnerName);
  }

  return (
    <section style={{ padding: "0px" }}>
      <div
        className="container mt-4"
        style={{ padding: "0px", marginBottom: "15px" }}
      >
        {" "}
        <div className="row justify-content-between">
          <div className="col">
            <form>
              <div className="row">
                <div className="col">
                  <label
                    style={{ paddingLeft: "12px", paddingRight: "20px" }}
                    className="description"
                  >
                    Select city
                  </label>
                  <input
                    list="places"
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleCityChange}
                    value={selectedCity}
                    required
                    pattern={autocompleteCities.join("|")}
                    autoComplete="off"
                    style={{ borderRadius: "2px" }}
                  />
                  <datalist id="places">
                    {CitiesData.map((city, i) => (
                      <option key={i}>{city.city}</option>
                    ))}
                  </datalist>
                </div>
              </div>
            </form>
          </div>
          <div className="col d-flex flex-row-reverse">
            <button
              style={{
                background: "#ffffff",
                color: "#5D5FEF",
                fontWeight: "500",
                border: "0",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
              onClick={() => {
                setSelectedCategory("cement");
                setStartDate(null);
                setEndDate(null);
                setPartnersId([]);
                setSelectedCity("");
              }}
            >
              Clear Filters &nbsp;<i class="bi bi-x"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-2">
            <div className="description">Category</div>
            <FormControl
              variant="filled"
              sx={{ m: 1, width: 200, marginLeft: 0, marginBottom: 0 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {/* {tableData.map((row,index)=>{return(<MenuItem value={10}>{row.}</MenuItem>);})} */}
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={"cement"}>Cement</MenuItem>
                <MenuItem value={"steel"}>Steel</MenuItem>
                <MenuItem value={"sand"}>Sand</MenuItem>
                <MenuItem value={"aggregate"}>Aggregate</MenuItem>
                <MenuItem value={"putty"}>Putty</MenuItem>
                <MenuItem value={"primer"}>Primer</MenuItem>
                <MenuItem value={"paint"}>Paint</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* <div className="col">
            <div className="description">City</div>
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 120, marginLeft: 0, marginBottom: 0 }}
            >
              <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          <div className="col-2">
            <div className="description">Partner</div>
            <FormControl
              variant="filled"
              sx={{ m: 1, width: 200, marginLeft: 0, marginBottom: 0 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Select Partners
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-multiple-checkbox"
                multiple
                value={partnersId}
                onChange={(event) => partnerFilterHandler(event)}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {partnerData
                  // .filter((partner, index) => partner.id === index + 1)
                  .map((partner, index) => {
                    return (
                      <MenuItem value={partner.id} key={partner.id}>
                        <Checkbox
                          checked={partnersId.indexOf(partner.id) > -1}
                          // checked={() => {
                          //   for (let x in partnersId) {
                          //     if (partnersId[x].id === partner.id) return true;
                          //     else return false;
                          //   }
                          // }}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <ListItemText
                          primary={partner.full_name}
                          // onChange={partnerFilterHandler}
                        />
                      </MenuItem>
                    );
                  })}
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>

          <div
            className="col-4 flex-container"
            style={{ background: "#F3F3F3", borderRadius: "5px" }}
          >
            <div className="row ">
              <div
                className="col-6 flex-child"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "bold",
                  marginLeft: "20px",
                  marginTop: "14px",
                  color: "#6D6D6D",
                  display: "inline-block",
                }}
              >
                Requirement{" "}
                <p
                  style={{
                    // fontSize: "20px",
                    color: "#000000",
                    marginTop: "12px",
                    // display: "inline-block",
                  }}
                >
                  {Math.round(requirement, 2) + " " + reqUnit}
                </p>
              </div>{" "}
              <div
                className="col-6 flex-child"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "bold",
                  marginLeft: "5px",
                  marginTop: "14px",
                  color: "#6D6D6D",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Expected Business
                <p
                  style={{
                    // fontSize: "20px",
                    color: "#000000",
                    marginTop: "12px",
                  }}
                >
                  {/* {Math.round(expectedBusiness, 2) + " Lac"} */}
                  <CurrencyFormat
                    value={Math.round(expectedBusiness, 2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹ "}
                    renderText={(value) => <div>{value}</div>}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <DatePick
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        </div>
      </div>
      {/* <div className="container">
        {partnerData.map((partner, index) => {
          return <div className="row">{partner.full_name}</div>;
        })}
      </div> */}
      {/* <div className="container">{userName ? userName[0].full_name : null}</div> */}
    </section>
  );
}
export default Home;
