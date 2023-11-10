import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trackReducer from "../reducers/track";
import likeReducer from "../reducers/liked";

const bigReducer = combineReducers({
   track: trackReducer,
   liked: likeReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
