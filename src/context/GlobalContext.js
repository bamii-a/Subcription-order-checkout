import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/reducer";
import axios from "axios";
import { prices } from "../data";

const GET_PRICES = "GET_PRICES";
const HANDLE_CHANGE = "HANDLE_CHANGE";

const initialState = {
  duration: 12,
  cloud_storage: 5,
  upfront: "No",
  email: "",
  pricingData: [],
  totalPrice: "0",
  discount: 0.1,
  pricePerGB: "",
  calculatedPrice: "0",
};
const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  // next step
  const nextStep = () => {
    const {
      duration,
      upfront,
      cloud_storage,
      email,
      totalPrice,
      discount,
      pricePerGB,
      calculatedPrice,
    } = state;

    if (step === 1 && duration && upfront && cloud_storage) {
      setStep(step + 1);
    } else if (step === 1) {
      alert(" please fill all details");
    }
    if (
      step === 2 &&
      !cardDetails.cardNumber &&
      !cardDetails.cardExpiry &&
      !cardDetails.Cvv
    ) {
      alert(" please fill all details");
    } else if (step === 2) {
      setStep(step + 1);
    }
    if (step === 3 && email && acceptTerms) {

      //  process submission here
      const sendData = async () => {
        try {
          let updatedValues = await fetch(
            "https://webhook.site/4835b380-0344-4f91-aaf0-0ad419b92f1c",
            {
              method: "post",
              mode: "no-cors",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email,
                upfront,
                duration,
                cloud_storage,
                totalPrice,
                discount,
                pricePerGB,
                calculatedPrice,
              }),
            }
          );
          console.log(updatedValues);
        } catch (error) {
          console.log(error);
        }
      };
      setStep(step + 1);
      // call submission function
      sendData();
    } else if (step === 3) {
      alert(" please fill all details");
    }
  };

  // go back
  const previousStep = () => {
    setStep(step - 1);
  };

  // fetch prices from API
  const fetchPrices = async (url) => {
    try {
      const response = await axios.get(url);
      const pricingData = response.data.subscription_plans;
      dispatch({ type: GET_PRICES, payload: pricingData });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrices(prices);
  }, [state.duration, state.cloud_storage, state.upfront]);

  const handleChangeInt = (e) => {
    let name = e.target.name;
    let value = parseInt(e.target.value);
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const handleChangeStr = (e) => {
    let name = e.target.name;
    let value = e.target.value.toString();
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        step,
        setStep,
        acceptTerms,
        setAcceptTerms,
        nextStep,
        previousStep,
        handleChangeStr,
        handleChangeInt,
        cardDetails,
        setCardDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
