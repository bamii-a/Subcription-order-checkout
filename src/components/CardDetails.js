import React from "react";
import styled from "styled-components";

const CardDetails = ({ cardDetails, handleChangeStr }) => {

  return (
    <Wrapper>
      <section className="section-center card">
        <div className="card-info">
          <label htmlFor="ccn">Card Number:</label>
          <input
            id="cardNumber"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="16"
            placeholder="xxxx xxxx xxxx xxxx"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={(e) => handleChangeStr(e)}
            required
          />
        </div>
        <div className="card-exp-cvv">
          <label htmlFor="cce">Card Expiry:</label>
          <input
            id="cardExpiry"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="6"
            placeholder="MM/YYYY"
            name="cardExpiry"
            value={cardDetails.cardExpiry}
            onChange={(e) => handleChangeStr(e)}
            required
          />
        </div>
        <div className="card-exp-cvv">
          <label htmlFor="ccs">Card Cvv:</label>
          <input
            id="cardCvv"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="3"
            placeholder="eg. 234"
            name="cardCvv"
            value={cardDetails.cardCvv}
            onChange={(e) => handleChangeStr(e)}
            required
          />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto 2rem;
  .card {
    height: 40vh;
    border-radius: 16px;
    padding: 0.7rem;
    background: white;
    box-shadow: var(--light-shadow);
  }
  .card-info,
  .card-exp-cvv {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1rem;
      text-transform: uppercase;
    }
    input {
      height: 3rem;
      box-shadow: var(--dark-shadow);
      border-radius: 16px;
      border: none;
      margin: 0.8rem 0;
      width: 50%;
      padding: 1rem;
    }
  }
  @media screen and (min-width: 991px) {
    .card {
      width: 40rem;
    }
  }
`;
export default CardDetails;
