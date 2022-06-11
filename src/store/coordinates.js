import { createSlice } from "@reduxjs/toolkit";

const initialCoordinates = {
  lat: 28,
  lng: 77,
};

const coordinateSlice = createSlice({
  name: "marker",
  initialState: initialCoordinates,
  reducers: {
    lat(state, action) {
      state.lat = action.payload;
    },
    lng(state, action) {
      state.lng = action.payload;
    },
  },
});

export const coordinateActions = coordinateSlice.actions;

export default coordinateSlice.reducer;
