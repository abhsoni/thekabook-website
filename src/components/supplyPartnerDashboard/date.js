import React, { useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// import { useState } from "react";

function DatePick(props) {
  const { startDate, setStartDate, endDate, setEndDate } = props;

  console.log(startDate);
  console.log(endDate);

  return (
    <div className="date">
      <div className="flex-container">
        <div className="flex-child" style={{ borderRight: "0px" }}>
          <div style={{ marginBottom: "8px" }}>
            <div className="description">Project Start Date</div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="yyyy-mm-dd"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div
          className="flex-child description"
          style={{ maxWidth: "30px", marginTop: "45px", marginLeft: "13px" }}
        >
          to
        </div>
        <div className="flex-child">
          <div style={{ marginBottom: "8px" }}>
            <div className="description">Project End Date</div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="yyyy-mm-dd"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
export default DatePick;
