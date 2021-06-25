import React from "react";
import {
  Order,
  Summary,
  CardDetails,
  Email,
  PurchaseComplete,
} from "../components";
import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";

const Subscription = () => {
  const {
    step,
    duration,
    upfront,
    cloud_storage,
    handleChangeStr,
    handleChangeInt,
    cardDetails,
    email,
    acceptTerms,
    setAcceptTerms,
    totalPrice,
    discount,
    calculatedPrice,
    pricePerGB,
  } = useGlobalContext();

  return (
    <Wrapper>
      {step === 1 && (
        <Order
          duration={duration}
          cloud_storage={cloud_storage}
          upfront={upfront}
          handleChangeStr={handleChangeStr}
          handleChangeInt={handleChangeInt}
        />
      )}
      {step === 2 && (
        <CardDetails
          cardDetails={cardDetails}
          handleChangeStr={handleChangeStr}
        />
      )}
      {step === 3 && (
        <Email
          email={email}
          acceptTerms={acceptTerms}
          setAcceptTerms={setAcceptTerms}
          handleChangeStr={handleChangeStr}
        />
      )}
      {step === 4 && <PurchaseComplete email={email} />}
      <Summary
        duration={duration}
        upfront={upfront}
        cloud_storage={cloud_storage}
        totalPrice={totalPrice}
        discount={discount}
        calculatedPrice={calculatedPrice}
        pricePerGB={pricePerGB}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 75vh;
  width: 100%;
  ${"" /* padding: 1rem 0; */}

  @media screen and (min-width: 991px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
  }
`;
export default Subscription;
