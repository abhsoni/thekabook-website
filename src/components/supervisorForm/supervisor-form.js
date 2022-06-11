import Header from "./header";
import DatePick from "./date";
import Project from "./project";
import PartyPayment from "./partyPayment";
import AddPayment from "./addPayments";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
// import Webcam from "react-webcam";
import axios, { Axios } from "axios";
import "./spf.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import Webcam from "react-webcam";
import { useLocation } from "react-router-dom";

// import { db } from "./firebase";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SupervisorForm() {
  let query = useQuery();
  const [getProjectSite, setGetProjectSite] = useState([]);
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  let xvlaue = range(0, 100);
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
  const [selectMilestone, setSelectMilesone] = useState([]);
  const arrSite = [];
  // function fetchProjectSiteHandler() {
  //   fetch(
  //     "http://15.206.127.253/api/v1/supervisor-projects/?code=71282982216a4901"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((siteData) => {
  //         return { id: siteData.epissode_id, title: siteData.title };
  //       });
  //       setSiteAddress(transformedData);
  //       console.log(data.results);
  //     });
  // }

  // function fetchProjectSiteHandler() {
  //   // if (phoneNo.length != 12) {
  //   //   alert(
  //   //     "👉Invalid number of digits.\n" +
  //   //       "🙂 Please enter valid Mobile Number📴."
  //   //   );
  //   //   return;
  //   // }
  //   // const phone_number_format =
  //   //   "+" +
  //   //   phoneNo.substring(0, 2) +
  //   //   " " +
  //   //   phoneNo.substring(2, 7) +
  //   //   "-" +
  //   //   phoneNo.substring(7, 12);
  //   // console.log("jkdhkh", phoneNo, " ", phone_number_format);
  //   axios
  //     .get(
  //       "http://15.206.127.253/api/v1/supervisor-projects/?code=71282982216a4901"
  //     )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.map((siteData) => {
  //         return siteAddress.push(siteData.project_name);
  //       });
  //       // setSiteAddress(transformedData);
  //       // arrSite = transformedData;
  //       console.log(siteAddress[0]);
  //       console.log(siteAddress[0]);
  //     });

  //   // console.log(phoneNo);
  // }
  const [projectId, setProjectId] = useState("");
  const [milestoneId, setMilestoneId] = useState("");
  useEffect(function fetchProjectSiteHandler() {
    axios
      .get(
        `https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/supervisor-projects/?code=${query.get(
          "code"
        )}`
      )
      .then((response) => {
        const data = response.data;
        setSiteAddress(data);

        // setProjectId(siteAddress[0].id);
        console.log(data.id);
        // return response.data;
      })
      .then((data) => {
        // const transformedData = data.map((siteData) => {
        //   return siteAddress.push(siteData.project_name);
        // });
        // setSiteAddress(transformedData);
        // arrSite = transformedData;
        console.log(siteAddress[0]);
        console.log(siteAddress[0]);
        setProjectId(siteAddress[0].id);
        console.log(siteAddress[0].id);
      })
      .catch((err) => console.log("Something went wrong.", err));
  }, []);
  function fetchMilestoneHandler() {
    console.log(projectId);
    axios
      .get(
        `https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/project-timeline/?project_id=${projectId}`
      )
      .then((response) => {
        setSelectMilesone(response.data);
        return response.data;
      })
      .then((data) => {
        // const transformedData = data.map((siteData) => {
        //   return selectMilestone.push({
        //     milestone_name: siteData.milestone_name,
        //     milestone_id: siteData.milestone_id,
        //   });
        // });
        // setSelectMilesone(transformedData);
        console.log(selectMilestone.length);
        console.log(selectMilestone[0].milestone_name + "17655");
      })
      .catch((err) => console.log("Something went wrong.", err));
  }
  useEffect(() => {
    fetchMilestoneHandler();
  }, [projectId, siteAddress]);

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
  const [photoVideo, setPhotoVideo] = useState(null);
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

  // function sendText() {
  //   axios
  //     .post(
  //       "http://15.206.127.253/api/v1/upload-image/",
  //       {
  //         milestone_id: 1,
  //         project_id: 2,
  //         image: file,
  //         comment: "Text",
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then(
  //       (response) => console.log("Successful", response),
  //       alert("Thank You.\n" + "Your form has been submitted.")
  //     )
  //     .catch((err) => console.log("Something went wrong.", err));

  //   // console.log(phoneNo);
  // }
  const fileSelectHandler = (event) => {
    const newImage = event.target.files[0];
    // newImage["id"] = Math.random();
    console.log(newImage.name + "xxxxxxxxxxxxxxxxxxxxxxx");

    // setPhotoVideo(event.target.files[0]);
    console.log(photoVideo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(projectId);
    console.log(photoVideo);
    const data = new FormData();
    data.append("image", photoVideo, photoVideo.name);
    data.append("comment", comment);
    data.append("image_type", "timeline");
    data.append("project_id", projectId);
    data.append("milestone_id", 6);
    // data.append("task_id", 19804);
    console.log(`this is data ${data}`);
    // const valuess = {
    //   // id: 458,
    //   image: data,
    //   comment: comment,
    //   image_type: "issue",
    //   project_id: projectId,
    //   milestone_id: milestoneId,
    //   task_id: 19804,
    // };
    axios
      .post(
        "https://cors-everywhere.herokuapp.com/http://15.206.127.253/api/v1/upload-image/",
        data,
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // multipart/form-data
          headers: { "Content-Type": "multipart/form-data" },
          // body: JSON.stringify(valuess),
        }
      )
      .then(
        (response) => console.log("Successful", response),
        alert("Thank You.\n" + "Your form has been submitted.")
        // console.log(photoVideo)
      )
      .catch(
        (err) => console.log("Something went wrong.", err)
        // alert("There is an error while submitting this form.")
      );
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: { exact: "environment" },
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
  // window.location.reload();
  const [projectSite, setProjectSite] = useState([]);
  const [flag, setFlag] = useState(false);
  const projectSiteHandler = (id, projectID) => {
    setFlag(!flag);
    setProjectSite(id);
    setProjectId(projectID);
    if (projectSite === id && flag) {
      setProjectSite(null);
      setProjectId(null);
    }
    // setProjectSite("#31a05f");
    // arr.push(id);
    console.log("dshkhdfj" + projectSite);
    console.log("Project Id: " + `${projectId}`);
  };
  const [selectedMilestone, setSelectedMilestone] = useState("");
  const handleChange = (event) => {
    setSelectedMilestone(event.target.value);
    selectMilestone.forEach((el) => {
      if (el.milestone_name === event.target.value) {
        setMilestoneId(el.milestone_id);
      }
    });
    console.log(selectMilestone);
    console.log(`   
    ${event.target.value} , ${selectedMilestone}, ${milestoneId}`);
  };
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
          <section>
            <div className="project">
              <div className="container">
                <div className="card">
                  <h3>
                    Select Project Site<span style={{ color: "red" }}>*</span>
                  </h3>
                  {/* {siteAddress.map((siteadd) => {
              return <div>{siteadd}</div>;
            })} */}
                  {/* <div>{siteAddress[0]?.project_name + "1220"}</div> */}
                  {siteAddress.map((projects, index) => {
                    return projectSite === index + 1 ? (
                      <div
                        className="row align-items-center g-0 mt-2"
                        key={index + 1}
                        onClick={() => {
                          projectSiteHandler(index + 1, projects.id);
                        }}
                        style={{
                          display: "flex",
                          flexWrap: "nowrap",
                          flexDirection: "row",
                        }}
                      >
                        <div style={{ display: "flex", width: "36px" }}>
                          <div
                            className="circle"
                            style={{ background: "#31a05f" }}
                          >
                            <i class="bi bi-check-lg"></i>
                          </div>
                        </div>
                        <div className="pt-1" style={{ display: "flex" }}>
                          <a className="a" onClick={null}>
                            {projects.project_name}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="row  g-0 mt-2"
                        key={index + 1}
                        onClick={() =>
                          projectSiteHandler(index + 1, projects.id)
                        }
                        style={{
                          display: "flex",
                          flexWrap: "nowrap",
                          flexDirection: "row",
                        }}
                      >
                        <div style={{ display: "flex", width: "36px" }}>
                          <div className="circle" style={{ background: "" }}>
                            <i class="bi bi-check-lg"></i>
                          </div>
                        </div>
                        <div className="pt-1" style={{ display: "flex" }}>
                          <a className="a" onClick={null}>
                            {projects.project_name}
                          </a>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Bungalow site 1 @ Ram Nagar</a>
              </div>
            </div>
            <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Bungalow site 1 @ Ram Nagar</a>
              </div>
            </div>
            <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Bungalow site 1 @ Ram Nagar</a>
              </div>
            </div> */}
                  <h3 style={{ marginTop: "24px" }}>
                    Select Milestone<span style={{ color: "red" }}>*</span>
                  </h3>
                  <div className="row dropdown mt-2 g-0">
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select Milestone
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedMilestone}
                          label="Select Milestone"
                          onChange={handleChange}
                        >
                          {selectMilestone.map((milestone, index) => {
                            return (
                              <MenuItem
                                value={milestone.milestone_name}
                                id={milestone.milestone_id}
                                // onClick={() =>
                                //   setMilestoneId(milestone.milestone_id)
                                // }
                              >
                                {milestone.milestone_name}
                              </MenuItem>
                            );
                          })}
                          {/* <MenuItem value={10}>Civil Work -1</MenuItem>
                          <MenuItem value={20}>Civil Work -2</MenuItem>
                          <MenuItem value={30}>Civil Work -3</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="row mt-4">
                    <div className="col-5 col-lg-3">
                      <h3>Mistry Count</h3>
                      <FormControl sx={{ width: 100, marginTop: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                          Count
                        </InputLabel>
                        <Select
                          // labelId="demo-simple-select-label"
                          // id="demo-simple-select"
                          value={mistryCount}
                          label="Select Milestone"
                          onChange={(event) => {
                            setMistryCount(event.target.value);
                          }}
                        >
                          {xvlaue.map((number) => {
                            return <MenuItem value={number}>{number}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-2">
                      <div class="d-flex" style={{ height: "100%" }}>
                        <div class="vr"></div>
                      </div>
                    </div>
                    <div className="col-5 col-lg-3 ">
                      <h3>Labour Count</h3>
                      <FormControl sx={{ width: 100, marginTop: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                          Count
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={labourCount}
                          label="Select Milestone"
                          onChange={(event) => {
                            setLabourCount(event.target.value);
                          }}
                        >
                          {xvlaue.map((number) => {
                            return <MenuItem value={number}>{number}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <h3>
                      Upload Photo<span style={{ color: "red" }}>*</span>
                    </h3>
                  </div>
                  <div className="row mt-2">
                    <input
                      type="file"
                      // multiple
                      // value={photoVideo}
                      onChange={(event) => setPhotoVideo(event.target.files[0])}
                    />
                    <div style={{ textAlign: "center", marginTop: "24px" }}>
                      <button
                        style={{
                          border: "none",
                          background: "#163F58",
                          maxWidth: "400px",
                          width: "100%",
                        }}
                        onClick={openCameraHandler}
                      >
                        <h3 style={{ paddingTop: "10px", color: "#ffffff" }}>
                          <i class="bi bi-camera"></i>&nbsp;&nbsp; Click Photo
                        </h3>
                      </button>
                      <div>Photo Clicked: {clickedPhotosNumbers}</div>
                    </div>
                  </div>
                  {/* {showCamera ? (
              <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                screenshotQuality="1"
                width={1280}
                videoConstraints={videoConstraints}
              >
                {({ getScreenshot }) => (
                  <button
                    onClick={() => {
                      const imageSrc = getScreenshot();
                      // setPhotoVideo(imageSrc);
                      console.log(imageSrc);
                    }}
                  >
                    Capture photo
                  </button>
                )}
              </Webcam>
            ) : // <div>
            //   <video ref={videoRef}>{getVideo()}</video>
            //   <button className="takePhoto" onClick={takePhoto}>
            //     SNAP
            //   </button>
            // </div>
            null} */}

                  {/* <div>
              <canvas ref={photoRef}></canvas>
            </div> */}
                  <div className="row mt-4">
                    <h3>
                      Issues/ Comments <span style={{ color: "red" }}>*</span>
                    </h3>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          width: "100%",
                          height: "140px",
                          marginTop: 1,
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Comment"
                        multiline
                        rows={4}
                        value={comment}
                        onChange={(event) => {
                          setComment(event.target.value);
                        }}
                        placeholder="Add a comment"
                      />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
