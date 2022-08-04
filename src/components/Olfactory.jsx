import React from "react";
import styled from "styled-components";
import Group from "../assets/Group.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
import Ellipse2 from "../assets/Ellipse2.svg";
import mission from "../assets/mission.jpg";
// import ScriptTag from "react-script-tag";
// import $ from "jquery";

const Olfactory = () => {
  let options = {
    startAngle: 1.5,
    size: 80,
    value: 0.6,
    thickness: 10,
    fill: { gradient: ["#fff"] },
  };
  // $(".circle .bar").circleProgress(options).on("circle-animation-progress");

  let options1 = {
    startAngle: 1.5,
    size: 80,
    value: 0.9,
    thickness: 10,
    fill: { gradient: ["#fff"] },
  };
  // $(".circle1 .bar1").circleProgress(options1).on("circle-animation-progress");
  return (
    <Wrapper>
      <section class="mission-section" id="mission">
        <div class="mission-img">
          <div class="container-fluid p-0 ">
            <div class="mission-content">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <p class="mission-header">
                    Reduced olfactory function could be an early and important
                    warning of neuro-degenerative disorders, particularly of
                    Parkinson’s and Alzheimer’s disease.
                  </p>
                  <p class="mission-des">
                    <b>Olfactory dysfunction</b> is a common feature in the
                    older population, and its severity increases with aging. It
                    may manifest early in neurodegenrative diseases as well as
                    mild cognitive impairment and represents an important early
                    clinical symptom suggestive of neurodegeneration.
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 mission-side-content">
                  <p class="mobile-padding">
                    <b> 13 million people in America</b> experience anosmia, a
                    partial or complete loss of smell.
                  </p>

                  <img src={Group} />
                  <p style={{ paddingTop: "45px" }}>
                    Approximately<b> 1 in 8 Americans</b> over age 40 has
                    measurable smell dysfunction.
                  </p>

                  <div
                    class="d-flex"
                    style={{ paddingTop: "50px", paddingBottom: "50px" }}
                  >
                    <span>
                      <div class="wrapper">
                        <div class="circle">
                          <div class="bar"></div>
                        </div>
                      </div>
                    </span>
                    <span style={{ paddingRight: "50px" }}>
                      <img src={Ellipse1} />
                    </span>
                    <p>
                      Over 50% of subjects between 65-80 years of age suffer
                      from anosmia.
                    </p>
                  </div>
                  <div class="d-flex">
                    <span>
                      <div class="wrapper">
                        <div class="circle1">
                          <div class="bar1"></div>
                        </div>
                      </div>
                    </span>
                    <span style={{ paddingRight: "30px" }}>
                      <img src={Ellipse2} alt="" />
                    </span>
                    <p>
                      80% of subjects above 80 years of age suffer from anosmia.
                    </p>
                  </div>
                </div>
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
  .mission-img {
    background-image: url(${mission});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: auto;
  }
  .mission-content .mission-header {
    font-size: 40px;
    font-weight: 300;
    line-height: 47px;
    color: #fff;
  }
  .mission-content {
    padding-top: 80px;
  }

  .mission-des {
    font-weight: 300;
    font-size: var(--font-size-16px);
    line-height: 19px;
    color: #fff;
    padding-top: 40px;
    padding-bottom: 100px;
  }
  .mission-side-content p {
    font-weight: 300;
    font-size: var(--font-size-16px);
    line-height: 19px;
    color: #fff;
  }
  .mission-side-content {
    padding-left: 30px;
  }
  .mission-des b {
    font-weight: 600;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .mission-content .mission-header {
      font-size: 24px;
      font-weight: 300;
      line-height: 28px;
      color: #fff;
    }
    .mission-img {
      /* background-position: right; */
      background-position: right 25% bottom 50%;
    }
    b {
      font-weight: 600;
    }
    .mobile-padding {
      padding-top: 40px;
    }
    .mission-section .container-fluid {
      width: 85%;
    }
    .mission-content {
      padding-top: 72px;
    }
    .mission-des {
      display: none;
    }
    .mission-content p {
      font-weight: var(--font-weight-300);
      font-size: var(--font-size-14px);
      line-height: 16px;
    }
    .mission-side-content {
      padding-bottom: 60px;
    }
  }
`;

export default Olfactory;
