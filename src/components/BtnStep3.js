import React from "react";
import styled from "styled-components";

const BtnStep3 = ({nextStep, previousStep}) => {

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
        type="submit"
        className="btn btn-checkout"
        onClick={() => nextStep()}
      >
        Confirm
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
export default BtnStep3;
