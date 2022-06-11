import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useCallback, useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";

import { useSelector, useDispatch } from "react-redux";
import axios, { Axios } from "axios";

function GoogleMapFunc(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const [partnerData, setPartnerData] = useState([]);
  const [partnersId, setPartnersId] = useState([]);
  const [tableData, setTableData] = useState([]);
  // const [requirement, setRequirement] = useState("");
  // const [expectedBusiness, setExpectedBusiness] = useState("");
  // const [reqUnit, setReqUnit] = useState("Bags");

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
        // console.log(response.data);
      })
      .then((data) => {
        console.log(partnerData[0]);
        console.log(partnersId[0]);
      })
      .catch((err) => console.log("Something went wrong.", err));
  }
  useEffect(() => {
    getPartnerData();
  }, [1]);
  if (partnerData) {
    for (let x in partnerData) {
      partnersId.push(partnerData[x].id);
      console.log(partnerData[x].id);
    }
  }
  var partnersParam;
  if (partnersId) {
    // for
    partnersParam = partnersId.join(",");
  }
  useEffect(
    function fetchProjectSiteHandler() {
      console.log(`fetch ran -- ${partnersParam}`);

      axios
        // .get("https://prod.thekabook.com/api/v1/supplier-dashboard/", {
        .get(
          "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/supplier-dashboard/",
          {
            params: {
              partners: partnersParam,
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
    [partnerData]
  );

  // var requirementSum = 0;
  // var expectedBusinessSum = 0;

  // function handleRequirement() {
  //   if (
  //     selectedCategory === "putty" ||
  //     selectedCategory === "primer" ||
  //     selectedCategory === "paint"
  //   ) {
  //     setReqUnit("Liter");
  //   }
  //   if (selectedCategory === "sand" || selectedCategory === "aggregate") {
  //     setReqUnit("Cum");
  //   }
  //   if (selectedCategory === "cement") {
  //     setReqUnit("Bags");
  //   }
  //   if (selectedCategory === "steel") {
  //     setReqUnit("Kg");
  //   }
  //   if (selectedCategory === "cement") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.cement;
  //       expectedBusinessSum += el.cement_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   if (selectedCategory === "paint") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.cement;
  //       expectedBusinessSum += el.cement_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   if (selectedCategory === "steel") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.steel;
  //       expectedBusinessSum += el.steel_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   if (selectedCategory === "putty") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.putty;
  //       expectedBusinessSum += el.putty_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   if (selectedCategory === "primer") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.primer;
  //       expectedBusinessSum += el.primer_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   if (selectedCategory === "sand") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.sand;
  //       expectedBusinessSum += el.sand_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   if (selectedCategory === "aggregate") {
  //     tableData.forEach((el) => {
  //       requirementSum += el.aggregate;
  //       expectedBusinessSum += el.aggregate_expected_business;
  //     });
  //     setRequirement(requirementSum);
  //     setExpectedBusiness(expectedBusinessSum);
  //   }
  //   console.log(requirement);
  // }
  // useEffect(handleRequirement);

  const lat = useSelector((state) => state.coordinates.lat);
  const lng = useSelector((state) => state.coordinates.lng);
  const { isLoaded } = useLoadScript({
    // id: "google-map-script",
    googleMapsApiKey: "AIzaSyDiFw4rr5GchbXr6eXldGMWSORdVnzPIU4",
  });
  // const center = {
  //   lat: -3.745,
  //   lng: -38.523,
  // };
  const containerStyle = {
    width: "100%",
    height: "100%",
    top: "84px",

    position: "absolute",
  };
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  // console.log(isLoaded);
  if (!isLoaded) {
    return <div>OOO NM NJHJ</div>;
  }

  const center = { lat: lat, lng: lng };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center}></Marker>
      <div
        style={{
          position: "fixed",
          zIndex: "11000",
          paddingLeft: "20px",
          overflowY: "scroll",
          height: "600px",
        }}
      >
        {tableData.map((card, index) => {
          return (
            <div className="partners-projects-card">
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "capitalize",
                  paddingLeft: "22px",
                  paddingTop: "10px",
                  color: "#5D5FEF",
                }}
              >
                {card.project_name}
              </div>
              <div
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  paddingLeft: "22px",
                }}
              >
                Project Start Date:{" "}
                <span style={{ fontWeight: "700" }}>
                  {card.project_start_date}
                </span>
              </div>
              <div
                className="row mt-4"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <div
                  className="col-6 p-0"
                  style={{ borderRight: "2px solid #dadada" }}
                >
                  {selectedCategory === "cement" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.cement + " " + "Bags"}
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "steel" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.steel + " " + "Kg"}
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "sand" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.sand + " " + "Cum"}
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "aggregate" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.aggregate + " " + "Cum"}
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "putty" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.putty + " " + "Liter"}
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "primer" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.primer + " " + "Liter"}
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "paint" ? (
                    <>
                      <div className="map-quantity">Quantity</div>
                      <div className="map-quantity-number">
                        {card.paint + " " + "Liter"}
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="col-6 p-0" style={{ textAlign: "end" }}>
                  {selectedCategory === "cement" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(card.cement_expected_business, 1)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "steel" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(card.steel_expected_business, 1)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "sand" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(card.sand_expected_business, 1)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "aggregate" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(
                            card.aggregate_expected_business,
                            1
                          )}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "putty" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(card.putty_expected_business, 1)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "primer" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(card.primer_expected_business, 1)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                  {selectedCategory === "paint" ? (
                    <>
                      <div className="map-quantity">Expected Business</div>
                      <div className="map-quantity-number">
                        <CurrencyFormat
                          value={Math.round(card.paint_expected_business, 1)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹ "}
                          renderText={(value) => <div>{value}</div>}
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GoogleMap>
  ) : (
    <>Loading.................</>
  );
}
export default GoogleMapFunc;

// overflow-y: scroll;
//   overflow-x: hidden;
