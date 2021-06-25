import React from "react";
import styled from "styled-components";
import { subscriptions, storages } from "../data";

const Order = ({
  duration,
  cloud_storage,
  upfront,
  handleChangeStr,
  handleChangeInt,
}) => {
  return (
    <Wrapper>
      <main className="section-center card">
        {/* subscription */}
        <section className="period">
          <div>
            <h4>Subscription Period</h4>
          </div>
          <div className="duration">
            <form className="plan">
              {subscriptions.map((subscription, index) => {
                return (
                  <React.Fragment key={subscription}>
                    <label
                      className={`${
                        subscription === duration ? "label active" : "label"
                      }`}
                    >
                      <input
                        name="duration"
                        type="radio"
                        className="input"
                        value={subscription}
                        id="duration"
                        required
                        onChange={(e) => handleChangeInt(e)}
                      />{" "}
                      {subscription}
                    </label>
                  </React.Fragment>
                );
              })}
            </form>
          </div>
        </section>
        {/* end of subscription */}

        {/* storage */}
        <section className="period">
          <div>
            <h4>cloud storage space</h4>
          </div>
          <div className="storage">
            <form className="plan">
              {storages.map((storage, index) => {
                return (
                  <React.Fragment key={index}>
                    <label
                      className={`${
                        storage === cloud_storage ? "label active" : "label"
                      }`}
                    >
                      <input
                        name="cloud_storage"
                        key={index}
                        type="radio"
                        className="input"
                        onChange={(e) => handleChangeInt(e)}
                        value={storage}
                        id="cloud_storage"
                        checked={storage === cloud_storage}
                      />
                      {storage}
                    </label>
                  </React.Fragment>
                );
              })}
            </form>
          </div>
        </section>
        {/* end of storage */}

        {/* upfront */}
        <section>
          <div>
            <h4>upfront payment</h4>
          </div>
          <form action="" className="upfront">
            <div className="plan">
              <label
                className={`${
                  upfront === "Yes" ? "label active yes" : "label yes"
                }`}
              >
                <input
                  type="radio"
                  className="input "
                  onChange={(e) => handleChangeStr(e)}
                  name="upfront"
                  value="Yes"
                />
                Yes
              </label>
              {/*  NO  */}
              <label
                className={`${
                  upfront === "No" ? "label active no" : "label no"
                }`}
              >
                <input
                  type="radio"
                  className="input"
                  onChange={(e) => handleChangeStr(e)}
                  name="upfront"
                  value="No"
                />
                No
              </label>
            </div>
          </form>
        </section>
        {/* end of upfront */}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto 2rem;
  h4 {
    text-transform: capitalize;
  }

  .label {
    padding: 8px 14px;
    text-align: center;
    height: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    cursor: pointer;
    transition: background var(--transition);
  }
  .label:not(:last-of-type) {
    border-right: 1px solid var(--clr-primary-4);
  }
  .input {
    display: none;
  }

  .card {
    height: 40vh;
    border-radius: 16px;
    margin:0 auto;
    padding: 0.7rem;
    background: white;
    box-shadow: var(--light-shadow);
  }
  .period {
    margin-bottom: 1rem;
  }
  .duration,
  .storage,
  .upfront {
    width: 100%;
    border-radius: 16px;
    margin-top: 1rem;
    box-shadow: var(--dark-shadow);
  }
  .plan {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    border-radius: 16px;
  }
  .yes {
    padding-right: 10rem;
  }
  .no {
    padding-right: 10rem;
  }
  .label:hover {
    transition: all 0.3s linear;
    border-radius: 16px;
    color: var(--clr-white);
    background: var(--clr-primary-hover);
  }
  .active {
    transition: all 0.3s linear;
    border-radius: 16px;
    color: var(--clr-white);
    background: var(--clr-primary-hover) !important;
  }

  .plan-btn {
    padding: 5px;
    color: black;
    background: none;
  }

  @media screen and (min-width: 991px) {
    .card {
      width: 40rem;
      height:40vh;
    }
    .duration,
    .storage,
    .upfront {
      width: 60%;
    }
  }
`;
export default Order;
