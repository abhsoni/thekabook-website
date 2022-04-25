import Header from "./header";
import DatePick from "./date";
import Project from "./project";
import PartyPayment from "./partyPayment";
import AddPayment from "./addPayments";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./spf.css";
// import { db } from "./firebase";

function SupervisorForm() {
  const [getProjectSite, setGetProjectSite] = useState([]);
  // function fetchProjectSiteHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setGetProjectSite(data.results);
  //     });
  // }
  const [siteAddress, setSiteAddress] = useState([]);
  const arrSite = [];
  function fetchProjectSiteHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((siteData) => {
          return { id: siteData.epissode_id, title: siteData.title };
        });
        setSiteAddress(transformedData);
        console.log(data.results);
      });
  }
  useEffect(function fetchProjectSiteHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((siteData) => {
          return (
            { id: siteData.episode_id, title: siteData.title },
            siteAddress.push(siteData.title)
          );
        });
        // setSiteAddress(transformedData);
        // arrSite = transformedData;
        console.log(data.results);
        console.log(siteAddress[0]);
      });
  }, []);

  // function fetchProjectSiteHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((siteData) => {
  //         return { id: siteData.epissode_id, title: siteData.title };
  //       });
  //       setSiteAddress(transformedData);
  //       console.log(siteAddress);
  //     });
  // }
  // useEffect(function fetchProjectSiteHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((siteData) => {
  //         return { id: siteData.epissode_id, title: siteData.title };
  //       });
  //       setSiteAddress(transformedData);
  //       console.log(siteAddress);
  //     });
  // });

  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [mistryCount, setMistryCount] = useState("0");
  const [labourCount, setLabourCount] = useState("0");
  const [comment, setComment] = useState("");
  const [photoVideo, setPhotoVideo] = useState("");
  const [paidTo, setPaidTo] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [pettyPayment, setPettyPayment] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [payment, setPayment] = useState("");
  const [openCamera, setOpenCamera] = useState(false);
  const [cameraTakenPhotos, setCameraTakenPhotos] = useState([]);
  const [changeCamera, setChangeCamera] = useState(false);
  var clickedPhotosNumbers = cameraTakenPhotos.length;

  const handleSubmit = () => {
    fetch("https://supervisor-form-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify({
        selectedDate,
        mistryCount,
        labourCount,
        comment,
        photoVideo,
        cameraTakenPhotos,
        // paidTo,
        // paidBy,
        // paidAmount,
        // item,
        // qty,
        // pettyPayment,
        // payment,
      }),
      headers: { "Content-type": "application/json" },
    });
    // db.collection("collection")
    //   .add({ date: selectedDate })
    //   .then(() => {
    //     alert("message has been submitted.");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    console.log("selectedDate", selectedDate);
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: changeCamera ? { exact: "environment" } : "user",
  };
  const openCameraHandler = () => {
    setOpenCamera(true);
  };
  // const [mc,setMc]=useState(null);
  // const cameraTakenPhotoHandler = (event) => {
  //   for (let i = 0; i < event.target.files.length; i++) {
  //     const newImage = event.target.files[i];
  //     newImage["id"] = Math.random();
  //     console.log(event.target.files[i]);
  //     setCameraTakenPhotos((prevState) => [...prevState, newImage]);
  //   }
  //   // if (event.target.files[0]) {
  //   //   setPhotoVideo(event.target.files[0]);
  //   // }
  //   // setPhotoVideo(event.target.value);
  //   // console.log(event.target.files.length);
  // };
  return (
    <section style={{ paddingTop: "0px" }}>
      {openCamera ? (
        <div style={{ textAlign: "center" }}>
          <div className="webcam">
            <Webcam
              width={"100%"}
              height={"100%"}
              videoConstraints={videoConstraints}
            >
              {({ getScreenshot }) => (
                <div className="clickphoto">
                  <button
                    style={{
                      width: "50px",
                      height: "50px",
                      // appearance: "none",

                      border: "none",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      const imageSrc = getScreenshot();
                      // setPhotoVideo(imageSrc);
                      setCameraTakenPhotos((prevState) => [
                        ...prevState,
                        imageSrc,
                      ]);
                      setOpenCamera(false);
                      console.log(imageSrc);
                    }}
                  >
                    {/* Capture photo */}
                  </button>
                </div>
              )}
            </Webcam>
          </div>
          {/* <div
            style={{
              marginBottom: "-50px",
              // marginLeft: "50%",
              // marginRight: "50%",
              // marginBottom: "10%",
            }}
          >
            <button>click</button>
          </div> */}
        </div>
      ) : (
        <>
          <Header />
          <DatePick date={selectedDate} changedDate={setSelectedDate} />
          <Project
            mistryCount={mistryCount}
            setMistryCount={setMistryCount}
            labourCount={labourCount}
            setLabourCount={setLabourCount}
            comment={comment}
            setComment={setComment}
            photoVideo={photoVideo}
            setPhotoVideo={setPhotoVideo}
            onOpenCamera={openCameraHandler}
            clickedPhotosNumbers={clickedPhotosNumbers}
            siteAddress={siteAddress}
          />
          {/* <PartyPayment
            paidTo={paidTo}
            setPaidTo={setPaidTo}
            paidBy={paidBy}
            setPaidBy={setPaidBy}
            paidAmount={paidAmount}
            setPaidAmount={setPaidAmount}
            pettyPayment={pettyPayment}
            setPettyPayment={setPettyPayment}
          />
          <AddPayment
            item={item}
            setItem={setItem}
            qty={qty}
            setQty={setQty}
            payment={payment}
            setPayment={setPayment}
          /> */}
          <div className="container">
            <div className="row mb-5">
              <div className="col col-lg-2">
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  style={{
                    color: "#163F58",
                    borderColor: "#163F58",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    fontWeight: "500",
                    fontFamily: "Roboto",
                    marginTop: "30px",
                    width: "112px",
                  }}
                  onClick={null}
                >
                  Edit
                </Button>
              </div>
              <div className="col col-lg-2">
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  style={{
                    // paddingLeft: "30",
                    color: "#FFFFFF",
                    background: "#163F58",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    fontWeight: "500",
                    fontFamily: "Roboto",
                    marginTop: "30px",
                    width: "200px",
                  }}
                >
                  Submit Report
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default SupervisorForm;
