import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovieResults: null,
        gptMovieNames: null
    },
    reducers: {
       
       toggleGptSearch: (state,action) => {
        state.showGptSearch = !state.showGptSearch;
       },
       addGptMovie: (state,action) => {
         const {gptMovieNames, gptMovieResults} = action.payload;
         state.gptMovieNames = gptMovieNames;
         state.gptMovieResults = gptMovieResults;
       },
       clearGptMovies: (state) => {
           state.gptMovieNames = [];
           state.gptMovieResults = [];
       }
    }

});


export const { toggleGptSearch, addGptMovie , clearGptMovies} = gptSlice.actions;

export default gptSlice.reducer;