const GET_PRICES = "GET_PRICES";
const HANDLE_CHANGE = "HANDLE_CHANGE";

const reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === GET_PRICES) {
    // get total price
    const getTotalPrice = action.payload.map((pricing) => {
      const { duration_months, price_usd_per_gb: pgb } = pricing;
      if (state.duration === duration_months) {
        return state.cloud_storage * pgb;
      }
    });
    // price per gb
    const getPgb = action.payload.map((p) => {
      const { duration_months, price_usd_per_gb: pgb } = p;
      if (state.duration === duration_months) {
        return pgb;
      }
    });
    //  calculated price
    const getCalculatedTotal = getTotalPrice.map((totalPrice) => {
      if (state.upfront === "Yes") {
        let temp = totalPrice - totalPrice * state.discount;
        return temp;
      } else {
        return totalPrice;
      }
    });
    //   remove undefined items in calculate dprcies array
    const newGetPricePgb = getPgb.filter((gb) => gb);
    const newTotalPrice = getTotalPrice.filter((i) => i);
    const newGetCalculatedTotal = getCalculatedTotal.filter((value) => value);

    return {
      ...state,
      pricingData: [...action.payload],
      totalPrice: newTotalPrice,
      pricePerGB: newGetPricePgb,
      calculatedPrice: newGetCalculatedTotal,
    };
  }
};

export default reducer;
