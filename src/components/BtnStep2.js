import React from "react";
import styled from "styled-components";

const BtnStep2 = ({ nextStep, previousStep }) => {
    
  return (
    <Wrapper>
      <button
        type="button"
        className="btn btn-checkout"
        onClick={() => previousStep()}
      >
        Back
      </button>
      <button
        type="button"
        className="btn btn-checkout"
        onClick={() => nextStep()}
      >
        Next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 991px) {
    .btn-checkout {
      padding: 20px 45px;
    }
  }
`;
export default BtnStep2;
