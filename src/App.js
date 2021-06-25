import React from "react";
import styled from "styled-components";
import { Subscription, Footer } from "./components";

function App() {

  return (
    <Wrapper className="section-center">
      <h3>Complete your order</h3>
      <div className="underline"></div>
      <Subscription />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1rem 0;
  h3 {
    text-align: center;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--clr-primary-1);
    margin: 0 auto 0.7rem;
  }

`;
export default App;
