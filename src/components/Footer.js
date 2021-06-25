import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import { BtnStep1, BtnStep2, BtnStep3, BtnStep4 } from "../components";

const Footer = () => {
  const { step, nextStep, previousStep } = useGlobalContext();

  return (
    <Wrapper>
      <footer className=" section-center footer">
        {step === 1 && <BtnStep1 nextStep={nextStep} />}
        {step === 2 && (
          <BtnStep2 nextStep={nextStep} previousStep={previousStep} />
        )}
        {step === 3 && (
          <BtnStep3 nextStep={nextStep} previousStep={previousStep} />
        )}
        {step === 4 && <BtnStep4 />}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto;
  .btn-checkout {
    border-radius: 16px;
  }
`;

export default Footer;
