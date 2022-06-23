import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: { 
        provinces: data.provinces,
        covid: [],
    },
    reducers: {
        updateProvinces(state, action) {
            state.provinces = action.payload;
        },
        updateCovid(state, action) {
            state.covid = action.payload;
        }
    },
});

const { updateProvinces, updateCovid } = covidSlice.actions;
const covidReducer = covidSlice.reducer;

export default covidReducer;
export { updateProvinces, updateCovid };
