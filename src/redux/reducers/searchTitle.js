import { SEARCHED_TITLE } from "../actions";

const initialState = {
   searchedTitle: null,
};

const searchTitleReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCHED_TITLE:
         return {
            searchedTitle: action.payload,
         };

      default:
         return state;
   }
};

export default searchTitleReducer;
