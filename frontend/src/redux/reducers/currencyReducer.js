import { SET_CURRENCY } from "../actions/currencyActions";

const initState = {
  currencySymbol: "Ksh",
  currencyName: "KES",
  currencyRate: 109.05,
};

const currencyReducer = (state = initState, action) => {
  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload.currencyName;

    if (currencyName === "USD") {
      return {
        ...state,
        currencySymbol: "$",
        currencyRate: action.payload.currencyRate,
        currencyName,
      };
    }
    if (currencyName === "KES") {
      return {
        ...state,
        currencySymbol: "Ksh",
        currencyRate: 109.05,
        currencyName,
      };
    }
    if (currencyName === "GBP") {
      return {
        ...state,
        currencySymbol: "£",
        currencyRate: action.payload.currencyRate,
        currencyName,
      };
    }
  }

  return state;
};

export default currencyReducer;
