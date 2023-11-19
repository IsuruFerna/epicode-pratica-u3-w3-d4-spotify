export const SELECTED_TRACK = "SELECTED_TRACK";
export const ADD_TO_LIKE = "ADD_TO_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const ADD_TO_SEARCH = "ADD_TO_SEARCH";
export const SAVE_RESULTS = "SAVE_RESULTS";
export const SEARCHED_TITLE = "SEARCHED_TITLE";

export const removeFromLikes = (i) => {
   return {
      type: REMOVE_LIKE,
      payload: i,
   };
};

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

export const getSearchedResults = (query) => {
   return async (dispatch) => {
      try {
         const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
               query
         );
         if (response.ok) {
            const { data } = await response.json();
            dispatch({
               type: SAVE_RESULTS,
               payload: data,
            });
         } else {
            throw new Error("Error receaving data!");
         }
      } catch (error) {
         console.log(error);
      }

      // fetch(
      //    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      // )
      //    .then((res) => {
      //       if (res.ok) {
      //          return res.json();
      //       } else {
      //          throw new Error("errore nel recupero dei tracce");
      //       }
      //    })
      //    .then((result) => {
      //       dispatch({
      //          type: SAVE_RESULTS,
      //          payload: result,
      //       });
      //    })
      //    .catch((err) => {
      //       console.log("errore", err);
      //    });
   };
};
