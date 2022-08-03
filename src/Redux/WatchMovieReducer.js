import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{
        name:'',
        overview:'',
        backdrop_path:''
    }
}

export const WatchMovieReducer = createSlice({
    name:'movieData',
    initialState,
    reducers:{
        movieDetails:(state,action) =>{
            state.value = action.payload
        }
    }
})

export const { movieDetails } = WatchMovieReducer.actions

export default WatchMovieReducer.reducer