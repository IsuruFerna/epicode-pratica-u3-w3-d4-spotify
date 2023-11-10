export const SELECTED_TRACK = "SELECTED_TRACK";
export const ADD_TO_LIKE = "ADD_TO_LIKE";
export const ADD_TO_SEARCH = "ADD_TO_SEARCH";
export const GET_SEARCHED_RESULTS = "GET_SEARCHED_RESULTS";
export const SEARCHED_TITLE = "SEARCHED_TITLE";

export const addTosearchedTitle = (result) => {
   return {
      type: SEARCHED_TITLE,
      payload: result,
   };
};

export const addToSelectedTrack = (selectedTrack) => {
   return {
      type: SELECTED_TRACK,
      payload: selectedTrack,
   };
};

export const addToLike = (track) => {
   return {
      type: ADD_TO_LIKE,
      payload: track,
   };
};

export const addToSearced = (result) => {
   return {
      type: ADD_TO_SEARCH,
      payload: result,
   };
};

export const getSearchedResults = (querry) => {
   return async (dispatch) => {
      fetch(
         "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + querry
      )
         .then((res) => {
            if (res.ok) {
               return res.json();
            } else {
               throw new Error("errore nel recupero dei tracce");
            }
         })
         .then((result) => {
            dispatch({
               type: GET_SEARCHED_RESULTS,
               payload: result,
            });
         })
         .catch((err) => {
            console.log("errore", err);
         });
   };
};
