import Button from "@mui/material/Button";
import axios from "axios";
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { coordinateActions } from "../../store/coordinates";
import { useSelector, useDispatch } from "react-redux";

function Project(props) {
  const {
    selectedCategory,
    startDate,
    endDate,
    requirement,
    setRequirement,
    expectedBusiness,
    setExpectedBusiness,
    partnersId,
    selectedCity,
    setSelectedCity,
  } = props;
  const dispatch = useDispatch();
  const lat = useSelector((state) => state.coordinates.lat);
  const lng = useSelector((state) => state.coordinates.lng);
  console.log(lat + lng);
  const [tableData, setTableData] = useState([]);
  // const []

  var startParam, endParam, partnersParam, cityParam;
  if (startDate) {
    startParam = startDate.toISOString().split("T")[0];
  }
  if (endDate) {
    endParam = endDate.toISOString().split("T")[0];
  }
  if (partnersId) {
    // for
    partnersParam = partnersId.join(",");
  }
  if (selectedCity) {
    cityParam = selectedCity;
  }
  console.log("start::::::", startDate);
  console.log("end::::::", endDate);
  console.log("partnersIdparam::::::", partnersParam);
  console.log(startDate);
  var requirementSum = 0;
  var expectedBusinessSum = 0;

  function handleRequirement() {
    if (selectedCategory === "cement") {
      tableData.forEach((el) => {
        requirementSum += el.cement;
        expectedBusinessSum += el.cement_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    if (selectedCategory === "paint") {
      tableData.forEach((el) => {
        requirementSum += el.cement;
        expectedBusinessSum += el.cement_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    if (selectedCategory === "steel") {
      tableData.forEach((el) => {
        requirementSum += el.steel;
        expectedBusinessSum += el.steel_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    if (selectedCategory === "putty") {
      tableData.forEach((el) => {
        requirementSum += el.putty;
        expectedBusinessSum += el.putty_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    if (selectedCategory === "primer") {
      tableData.forEach((el) => {
        requirementSum += el.primer;
        expectedBusinessSum += el.primer_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    if (selectedCategory === "sand") {
      tableData.forEach((el) => {
        requirementSum += el.sand;
        expectedBusinessSum += el.sand_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    if (selectedCategory === "aggregate") {
      tableData.forEach((el) => {
        requirementSum += el.aggregate;
        expectedBusinessSum += el.aggregate_expected_business;
      });
      setRequirement(requirementSum);
      setExpectedBusiness(expectedBusinessSum);
    }
    console.log(requirement);
  }
  useEffect(handleRequirement);
  useEffect(
    function fetchProjectSiteHandler() {
      console.log(`fetch ran --${startParam}  ${endParam} ${partnersParam}`);
      axios
        // .get("https://prod.thekabook.com/api/v1/supplier-dashboard/", {
        .get(
          "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/supplier-dashboard/",
          {
            params: {
              start_date: startParam,
              end_date: endParam,
              partners: partnersParam,
              city: cityParam,
            },
          }
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
    },
    [
      startDate,
      endDate,
      requirement,
      expectedBusiness,
      partnersId,
      selectedCity,
    ]
  );
  return (
    <div className="container mt-5">
      <div
        className="row"
        style={{
          background: "#F3F3F3",
          fontSize: "14px",
          color: "#808080",
          fontWeight: "600",
          height: "56px",
          paddingTop: "24px",
          borderRadius: "10px 10px 0% 0%",
          boxShadow: "1px 1px 1px #f3f3f3",
        }}
      >
        <div className="col-2">
          <div>Project</div>
        </div>
        <div className="col">Partner</div>
        <div className="col">Quantity</div>
        <div className="col">Unit</div>
        <div className="col">Start Date</div>
        <div className="col">City</div>
        <div className="col">Constructed Area</div>
        <div className="col">Project Cost</div>
        <div className="col">Location</div>
      </div>
      {tableData
        // .filter(
        //   (rowData) => rowData.project_start_date.subString(0, 4) > "2021"
        // )
        .map((row, index) => {
          return (
            <div
              className="row align-items-center"
              style={{
                background: "#fff",
                fontSize: "14px",
                color: "#000000;",
                fontWeight: "400",
                fontFamily: "Open Sans",
                boxShadow: "1px 1px 1px #f3f3f3",
                // borderBottom: "1px",
                // borderColor: "#000",
                // borderWidth: "1px",
                height: "56px",
              }}
            >
              <div className="col-2 align-self-center">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      style={{
                        fontSize: "24px",
                        height: "16px",
                        width: "16px",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="horns"
                      style={{
                        marginLeft: "10px",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "150px",
                      }}
                    >
                      {row.project_name}
                      <br />
                      <div
                        style={{
                          fontWeight: "normal",
                          // textTransform: "capitalize",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.project_location}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col">{row.partner}</div>
              {selectedCategory === "cement" ? (
                <div className="col">{row.cement}</div>
              ) : null}
              {selectedCategory === "steel" ? (
                <div className="col">{row.steel}</div>
              ) : null}
              {selectedCategory === "aggregate" ? (
                <div className="col">{row.aggregate}</div>
              ) : null}
              {selectedCategory === "putty" ? (
                <div className="col">{row.putty}</div>
              ) : null}
              {selectedCategory === "primer" ? (
                <div className="col">{row.primer}</div>
              ) : null}
              {selectedCategory === "paint" ? (
                <div className="col">{row.paint}</div>
              ) : null}
              {selectedCategory === "sand" ? (
                <div className="col">{row.sand}</div>
              ) : null}
              {/* {null} */}
              {selectedCategory === "putty" ||
              selectedCategory === "primer" ||
              selectedCategory === "paint" ? (
                <div className="col">liter</div>
              ) : null}
              {selectedCategory === "sand" ? (
                <div className="col">Cum</div>
              ) : null}
              {selectedCategory === "aggregate" ? (
                <div className="col">Cum</div>
              ) : null}
              {selectedCategory === "cement" ? (
                <div className="col">Bags</div>
              ) : null}
              {selectedCategory === "steel" ? (
                <div className="col">Kg</div>
              ) : null}
              <div className="col">{row.project_start_date}</div>
              <div
                className="col"
                style={{
                  // marginLeft: "10px",
                  // fontWeight: "bold",
                  textTransform: "capitalize",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "120px",
                }}
              >
                {row.city}
              </div>
              <div
                className="col"
                style={{
                  // marginLeft: "10px",
                  // fontWeight: "bold",
                  textTransform: "capitalize",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "120px",
                }}
              >
                {row.estimated_constructed_area}
                <span> Sq.Ft.</span>
              </div>
              <div
                className="col"
                style={{ color: "#3CC13B", fontWeight: "600" }}
              >
                {/* {row.total_project_cost} */}Rs.
                {" " +
                  Math.round(Math.round(row.total_project_cost) / 100000) +
                  " Lac"}
              </div>
              <div className="col">
                <Link to="/supply-partner-dashboard/maps">
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50px",
                      background: "#5D5FEF",
                      textTransform: "capitalize",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => {
                      const coordinates = row.location_coordinates.split(",");
                      dispatch(coordinateActions.lat(coordinates[0] * 1));
                      dispatch(coordinateActions.lng(coordinates[1] * 1));
                      console.log(coordinates);
                    }}
                  >
                    Map
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Project;
