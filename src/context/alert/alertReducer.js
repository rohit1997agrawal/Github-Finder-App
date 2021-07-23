import { REMOVE_ALERT, SET_ALERT } from "../types";

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
        loading: false,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
export default alertReducer;
