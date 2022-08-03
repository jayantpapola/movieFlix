import { configureStore } from "@reduxjs/toolkit";
import WatchMovieReducer from "./WatchMovieReducer";
const store = configureStore({
    reducer:{
        movieData:WatchMovieReducer,
    }
})

export default store;