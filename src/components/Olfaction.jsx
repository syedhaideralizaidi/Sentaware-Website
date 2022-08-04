import React from "react";
import styled from "styled-components";

const Olfaction = () => {
  return (
    <Wrapper>
      <section class="olfaction-section">
        <div class="container-fluid p-0 ">
          <div class="olfaction-content">
            <div class="row ">
              <div class="col-lg-12 col-md-6 col-sm-12">
                <h1>
                  It is possible to<span> detect decline in olfaction</span> by
                  a number of tests.
                </h1>
                <p>
                  Test your sense of smell with i-Sticks Evaluation and Therapy
                  kit, and take pre-emptive action against neurodegenerative
                  disorders.
                </p>
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
  .olfaction-content h1 {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    padding-top: 120px;
  }
  .olfaction-content span {
    font-weight: 600;
  }
  .olfaction-content p {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    padding: 30px 100px 0px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .olfaction-section .container-fluid {
      width: 85%;
    }
    .olfaction-content h1 {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      padding-top: 50px;
    }
    .olfaction-content p {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      padding: 20px 0px 0px;
    }
  }
`;

export default Olfaction;
