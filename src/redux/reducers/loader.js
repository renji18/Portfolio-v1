import * as actionType from "../actions/actionTypes";

const initialState = {
  siteLoader: true,
};

const loader = (state = initialState, { type, data }) => {
  switch (type) {
    case actionType.MAIN_LOADER:
      return {
        ...state,
        siteLoader: data,
      };
    default:
      return state;
  }
};

export default loader;
