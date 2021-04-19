import { ADDKEYWORD, REMOVEKEYWORD, CURRENTKEYWORD } from "./types";

const defaultState = {
  searchWord: "",
  keywords: [],
};

const reducer = (state = defaultState, action) => {
  let array = [...state.keywords];
  switch (action.type) {
    case ADDKEYWORD:
      //add keyword to saved list
      if (array.indexOf(action.payload) === -1) {
        array.push(action.payload);
        return {
          ...state,
          keywords: array,
        };
      }
      break;
    case REMOVEKEYWORD:
      //remove keyword from saved list
      return {
        ...state,
        keywords: array.filter((element) => element !== action.payload),
      };

    case CURRENTKEYWORD:
      //current searched word
      return {
        ...state,
        searchWord: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
