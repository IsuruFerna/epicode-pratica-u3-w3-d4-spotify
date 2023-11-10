import { ADD_TO_LIKE } from "../actions";

const initialState = {
   likedTracks: [],
};

const likeReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_LIKE:
         return {
            ...state,
            likedTracks: [...state.likedTracks, action.payload],
         };

      default:
         return state;
   }
};

export default likeReducer;
