import React from "react";
import styled from "styled-components";

const Email = ({ email, acceptTerms, setAcceptTerms, handleChangeStr }) => {
  return (
    <Wrapper>
      <section className="section-center card">
        <div className="email-info">
          <label htmlFor="ccn">Email Address</label>
          <input
            id="email"
            type="email"
            inputMode="text"
            placeholder="johndoe@yahoo.com"
            name="email"
            value={email}
            required
            onChange={(e) => handleChangeStr(e)}
          ></input>
        </div>
        <div className="terms">
          <input
            id="email"
            type="radio"
            inputMode="text"
            placeholder="johndoe@yahoo.com"
            name="acceptTerms"
            value={acceptTerms}
            required
            onChange={() => setAcceptTerms(true)}
          ></input>
          <label htmlFor="conditions">
            I accept <u>terms and conditions</u> of purchase
          </label>
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
    padding: 1rem;
    background: white;
    box-shadow: var(--light-shadow);
  }
  .email-info {
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
      margin: 1rem 0;
      width: 50%;
      padding: 1rem;
    }
  }
  .terms {
    margin-top: 2rem;
    label {
      margin-left: 1rem;
      u {
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 991px) {
    .card {
      width: 40rem;
    }
  }
`;
export default Email;
