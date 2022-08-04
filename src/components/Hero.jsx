import React from "react";
import styled from "styled-components";
import Hero_blue from "../assets/Hero_blue.svg";
import Navbar from "./Navbar.jsx";

const Hero = () => {
  return (
    <Wrapper>
      <section class="home-section" id="home">
        <div class="background-img">
          {/* <Navbar /> */}
          <div class="home-page-text">
            <div class="container-fluid p-0">
              <div class="col">
                <p class="home-heading">
                Smell your way to
                  <br />good health
                </p>
                <p class="home-text">
                Track your senses and fortify your mind, with the
                  <br />
                   <span>i-Sticks Evaluation and Training kit.</span>
                   
                </p>
                <button class="home-button ripple1">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .background-img {
    background-image: url(${Hero_blue});
    background-size: cover;
    background-position: top;
    height: 100vh;
  }
  .home-button {
    background-color: #22669c;
    box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3);
    border-radius: 8px;
    border: none;
    padding: 15px 20px;
    color: white;
  }
  .home-heading {
    font-size: var(--font-size-48px);
    font-weight: var(--font-weight-500);
    line-height: 56px;
    letter-spacing: 0em;
    color: var(--font-color-for-content);
    padding-top: 235px;
  }
  .home-text {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 19px;
    letter-spacing: 0em;
    color: var(--font-color-for-header);
    padding-bottom: 15px;
  }
  .ripple1 {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple1:hover {
    background: #4b68b8 radial-gradient(circle, transparent 1%, #4b68b8 1%)
      center/15000%;
  }
  .ripple1:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .home-page-text .container-fluid {
      width: 85%;
    }
    .home-heading {
      font-size: var(--font-size-24px);
      line-height: 28px;
      font-weight: var(--font-weight-500);
    }
    .home-text {
      font-size: var(--font-size-14px);
      line-height: 16px;
      font-weight: var(--font-weight-300);
    }
  }
`;

export default Hero;
