<Webcam
  audio={false}
  width={"100%"}
  height={"100%"}
  screenshotFormat="image/jpeg"
  screenshotQuality="1"
  // width={"100%"}
  style={{
    // position: "absolute",
    border: "#000000",
    borderWidth: "10px",
  }}
  videoConstraints={videoConstraints}
>
  {/* <button>click</button> */}
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
          setCameraTakenPhotos(imageSrc);
          setOpenCamera(false);
          console.log(imageSrc);
        }}
      >
        {/* Capture photo */}
      </button>
    </div>
  )}
</Webcam>;

useEffect(() => {
  const token = window.localStorage.getItem("token");
  var dashboard = window.localStorage.getItem("show-dashboard");
  setShowDashboard(dashboard);
  console.log(token);
  console.log(dashboard);
  console.log(showDashboard);

  setToken(token);
  var authSuccessful = window.localStorage.getItem("authSuccessful");
  setAuthSuccessful(authSuccessful);
  console.log(authSuccessful);
}, []);
useEffect(() => {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("show-dashboard", showDashboard);
  window.localStorage.setItem("authSuccessful", authSuccessful);
}, [token, showDashboard, authSuccessful]);
