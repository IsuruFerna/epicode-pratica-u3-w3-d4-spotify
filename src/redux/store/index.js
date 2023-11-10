import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trackReducer from "../reducers/track";
import likeReducer from "../reducers/liked";
import searchReducer from "../reducers/search";
import searchTitleReducer from "../reducers/searchTitle";

const bigReducer = combineReducers({
   track: trackReducer,
   liked: likeReducer,
   searched: searchReducer,
   searchedTitle: searchTitleReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
