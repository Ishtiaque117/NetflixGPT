import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers: {
        changeLanguage: (state,action) => {
            state.lang = action.payload;
        },
        clearLanguage: (state) => {
            state.lang = "en";
        }
    }
});

export const { changeLanguage, clearLanguage } = configSlice.actions;

export default configSlice.reducer;