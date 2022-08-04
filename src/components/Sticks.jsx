import React from "react";
import styled from "styled-components";
import i_sticks from "../assets/i_sticks.svg";
const Sticks = () => {
  return (
    <Wrapper>
      <section class="about-section" id="about">
        <div class="about-img ">
          <div class="container-fluid p-0">
            <div class="about-content offset-lg-7">
              <h3>An intuitive, easy to use olfactory test kit, to help you keep your senses sharp.</h3>
          
              <p>
              The Scentaware Evaluation kit helps you evaluate your olfactory senses with a series of tests included in the Sensifyaware App. 
              The following tests are covered during your olfactory evaulation :</p>
              <ul>
              <li>Odour identification</li>
              <li>Odour differentiation</li>
              <li>Odour intensity</li> 
              </ul>
              <p>
              The Scentaware Evaluation kit will help you determine whether you have an olfactory loss., and the extent of the same, allowing you to take precautionary measures in due time.
              </p>
                <br />
                <br />
               
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
  .about-img {
    background-image: url(${i_sticks});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 100vh;
  }

  .about-content {
    padding-top: 198px;
    color: var(--font-color-for-content);
  }
  .about-content h3 {
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-32px);
    line-height: 38px;
    color: var(--color-white);
    padding-bottom: 50px;
  }

  .about-content p,ul {
    font-weight: var(--font-weight-300);
    font-size: var(--font-size-16px);
    color: var(--color-white);
    line-height: 19px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .about-section .container-fluid {
      width: 85%;
    }
    .about-content {
      padding-top: 50px;
      padding-left: 5px;
    }
    .about-content h3 {
      font-size: var(--font-size-24px);
      font-weight: var(--font-weight-500);
      line-height: 28px;
      padding-bottom: 0px;
    }
    .about-content p,ul {
      font-size: var(--font-size-14px);
      line-height: 16px;
      padding-top: 0px;
    }
    .about-content p {
      padding-right: 0px;
      padding-top: 32px;
    }
    .about-img {
      background-position: 23%;
    }
    .about-img .container1 {
      padding: 0px 40px;
    }
  }
`;

export default Sticks;
