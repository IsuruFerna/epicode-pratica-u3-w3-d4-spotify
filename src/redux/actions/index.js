export const SELECTED_TRACK = "SELECTED_TRACK";
export const ADD_TO_LIKE = "ADD_TO_LIKE";

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
