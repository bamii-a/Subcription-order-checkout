import React from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";

const PurchaseComplete = ({ email }) => {
  let id = new Date().getTime().toString();

  return (
    <Wrapper>
      <section className="card">
        <h5>Purchase Complete</h5>
        <h5>Thank You {email}</h5>
        <GrStatusGood className="icon" />
        <h5>
          Order ID: <span> {id}</span>
        </h5>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 2rem 2rem;
  text-align: center;
  h5 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .card {
    height: 40vh;
    border-radius: 16px;
    padding: 1rem;
    background: white;
    box-shadow: var(--light-shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 991px) {
    .card {
      width: 40rem;
    }
  }
`;
export default PurchaseComplete;
