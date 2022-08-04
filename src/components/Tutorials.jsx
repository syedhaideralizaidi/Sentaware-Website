import React from "react";
import styled from "styled-components";
import scan_a_vial from "../assets/scan_a_vial.svg";
import smell_the_sample from "../assets/smell_the_sample.svg";
import identify_the_odor from "../assets/identify_the_odor.svg";
import check_your_result from "../assets/check_your_result.svg";

const Tutorials = () => {
  return (
    <Wrapper>
      <section class="tutorials-section" id="tutorials">
        <div class="container-fluid p-0">
          <div class="tutorials-content">
            <div class="row order tutorial-1-alignment">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src={scan_a_vial} class="img-fluid" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="row tutorial-1">
                  <div>
                    <p class="minutes">
                      Evaluate your sense of smell in under
                      <br />
                      <span>20 minutes.</span>
                    </p>
                  </div>
                  <div class="col-1">
                    <h4>1.</h4>
                  </div>
                  <div class="col-11">
                    <h4>Scan a vial</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="row tutorial-2">
                  <div class="col-1">
                    <h4>2.</h4>
                  </div>
                  <div class="col-11">
                    <h4>Smell the sample</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src={smell_the_sample} class="img-fluid" />
              </div>
            </div>
            <div class="row order tutorial-3-alignment">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src={identify_the_odor} class="img-fluid" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="row tutorial-3">
                  <div class="col-1">
                    <h4>3.</h4>
                  </div>
                  <div class="col-11">
                    <h4>Identify the odor</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="row tutorial-4">
                  <div class="col-1">
                    <h4>4.</h4>
                  </div>
                  <div class="col-11">
                    <h4>Check your result</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <img src={check_your_result} class="img-fluid" />
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
  .tutorials-content h2 {
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-32px);
    line-height: 38px;
    padding-top: 100px;
  }
  .tutorial-1-alignment {
    padding-top: 100px;
  }
  .tutorial-1 {
    padding-bottom: 70px;
  }
  .tutorial-2 {
    padding-top: 150px;
    padding-bottom: 120px;
  }
  .tutorial-3 {
    padding-top: 80px;
    padding-bottom: 130px;
  }
  .tutorial-4 {
    padding-top: 100px;
    padding-bottom: 200px;
  }
  .tutorial-3-alignment {
    padding-top: 100px;
  }
  .tutorials-content h4 {
    font-size: var(--font-size-32px);
    font-weight: var(--font-weight-300);
    line-height: 38px;
    padding-bottom: 33px;
  }
  .tutorials-content p {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 20px;
    font-family: "Inter", sans-serif;
  }
  .tutorial-1 .minutes {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    padding-bottom: 70px;
    padding-left: 40px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .tutorial-1 .minutes {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      padding: 0px 20px 40px;
    }
    .tutorial-1-alignment {
      padding-top: 20px;
    }
    .tutorial-3-alignment {
      padding-top: 30px;
    }
    .tutorials-section .container-fluid {
      width: 85%;
    }
    .order {
      flex-direction: column-reverse;
    }
    .tutorial-1 {
      padding-top: 40px;
      padding-bottom: 48px;
    }
    .tutorial-2 {
      padding-top: 70px;
      padding-bottom: 48px;
    }
    .tutorial-3 {
      padding-top: 80px;
      padding-bottom: 50px;
    }
    .tutorial-4 {
      padding-top: 80px;
      padding-bottom: 50px;
    }
    .tutorials-content h2 {
      font-weight: var(--font-weight-600);
      font-size: var(--font-size-24px);
      line-height: 28px;
      padding-top: 64px;
    }
    .tutorials-content h4 {
      font-size: var(--font-size-24px);
      font-weight: var(--font-weight-300);
      line-height: 28px;
      padding-bottom: 24px;
    }
    .tutorials-content p {
      font-size: var(--font-size-14px);
      line-height: 16px;
      line-height: 17px;
      font-family: "Inter", sans-serif;
    }
  }
`;

export default Tutorials;
