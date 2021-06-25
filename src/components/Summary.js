import React from "react";
import styled from "styled-components";

const Summary = ({
  duration,
  upfront,
  cloud_storage,
  totalPrice,
  discount,
  calculatedPrice,
  pricePerGB,
}) => {
  return (
    <Wrapper>
      <section className="section-center summary">
        <div className="order-summary">
          <h4>
            Duration <span>{duration} months</span>
          </h4>
          <h4>
            Cloud Storage <span>{cloud_storage} GB </span>
          </h4>
          <h4>
            Upfront payment <span>{upfront}</span>
          </h4>
        </div>
        <hr />
        <div className="order-pricing">
          <h4>
            Total price <span>${totalPrice}</span>
          </h4>
          <h4>
            Upfront Payment (10% off) <span>${discount}</span>
          </h4>
          <h4>
            Price/GB <span>${pricePerGB}</span>
          </h4>
          <hr />
          <h3>
            Calculated Price <span>${calculatedPrice}</span>
          </h3>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .summary {
    height: 30vh;
    border-radius: 16px;
    padding: 1rem;
    background: white;
    box-shadow: var(--light-shadow);
    margin-bottom: 1rem;
  }
  .order-pricing,
  .order-summary {
    h4 {
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    h3 {
      font-size: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: var(--clr-primary-1);
      }
    }
  }

  @media screen and (min-width: 991px) {
    .summary {
      height: 40vh;
      width: 30rem;
    }
    .order-pricing,
    .order-summary {
      h4 {
        margin-bottom: 1.5rem;
        font-size:1rem;
      }
    }
  }
`;
export default Summary;
