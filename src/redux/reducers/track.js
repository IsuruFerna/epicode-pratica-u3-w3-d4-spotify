import { SELECTED_TRACK } from "../actions";

const initialState = {
   track: [],
};

const trackReducer = (state = initialState, action) => {
   switch (action.type) {
      case SELECTED_TRACK:
         return {
            track: action.payload,
         };

      default:
         return state;
   }
};

export default trackReducer;
