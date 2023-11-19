import { ADD_TO_SEARCH, SAVE_RESULTS } from "../actions";

const initialState = {
   content: [],
};

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_SEARCH:
         return {
            ...state,
            content: [...state.content, action.payload],
         };

      case SAVE_RESULTS:
         return {
            ...state,
            content: action.payload,
         };
      default:
         return state;
   }
};

export default searchReducer;
