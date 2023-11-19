import { ADD_TO_LIKE, REMOVE_LIKE } from "../actions";

const initialState = {
   content: [],
};

const likeReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_LIKE:
         return {
            ...state,
            content: [...state.content, action.payload],
         };

      case REMOVE_LIKE:
         return {
            ...state,
            content: state.content.filter((track, i) => i !== action.payload),
         };

      default:
         return state;
   }
};

export default likeReducer;
