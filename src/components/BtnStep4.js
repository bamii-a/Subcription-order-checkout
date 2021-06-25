import React from "react";
import styled from "styled-components";

const BtnStep4 = () => {
  return (
    <Wrapper>
      <button
        className="btn btn-checkout"
        onClick={() => window.location.reload()}
      >
        Back Home
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 991px) {
    .btn-checkout {
      padding: 20px 45px;
    }
  }
`;
export default BtnStep4;
