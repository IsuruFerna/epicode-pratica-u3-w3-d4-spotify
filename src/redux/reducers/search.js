import { ADD_TO_SEARCH } from "../actions";

const initialState = {
   search: [],
};

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_SEARCH:
         return {
            ...state,
            search: [...state.search, action.payload],
         };

      default:
         return state;
   }
};

export default searchReducer;
