import React from "react";
import styled from "styled-components";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import input_arrow from "../assets/input_arrow.svg";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <section class="footer">
          <div class="container-fluid">
            <div class="row order">
              <div class="col-lg-3 col-md-4">
                <ul class="list-unstyled phone ">
                  <li>
                    <p>+1(7635) 547-12-97</p>
                  </li>
                  <br />
                  <li>
                    <p>Support@Sensify.inc</p>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mobile">
                <p class="align">Quick Links</p>
                <ul class="list-unstyled list ">
                  <li>
                    <a href="#!">About</a>
                  </li>
                  <li>
                    <a href="#!">Shop</a>
                  </li>
                  <li>
                    <a href="#!">Sensify</a>
                  </li>
                </ul>
                <div class="col-lg-3 col-md-6 mobile">
                  <ul class="list-unstyled list ">
                    <li>
                      <br />
                      <a href="#!">Sensify Inc</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- desktop footer --> */}
              <div class="col-lg-3 col-md-4 desktop">
                <p>Quick Links</p>
                <ul class="list-unstyled list ">
                  <li>
                    <a href="#!">About</a>
                  </li>
                  <li>
                    <a href="#!">Tutorial</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-4 desktop">
                <ul class="list-unstyled list equal">
                  <li>
                    <a href="#!">Shop</a>
                  </li>
                  <li>
                    <a href="#!">Sensify Inc</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-12 p-0">
                <p>Subscribe</p>
                <div class="input-group ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Get product updates"
                  />
                  <button class="btn btn-success" type="submit">
                    <img src={input_arrow} />
                  </button>
                </div>
              </div>
            </div>
            <hr class="mb-5" />
            <div class="row">
              <div class="col-lg-4 social">
                <span class="social1">
                  <img src={linkedin} />
                </span>
                <span>
                  <img src={facebook} class="social2" />
                </span>
                <span class="social3">
                  <img src={twitter} />
                </span>
              </div>
              <div class="col-lg-4 text-center"></div>
              <div class="col-lg-4">
                <p class="copy">© 2022 Sensify Inc. All rights reserved</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .list li a {
    text-decoration: none;
    color: white;
    opacity: 0.65;
  }
  .copy {
    font-size: 15px;
    font-weight: 400;
  }
  .list li {
    padding: 15px 0px;
    pointer-events: none;
  }

  .equal {
    padding-top: 40px;
  }

  hr {
    color: white;
  }
  .phone {
    margin-top: 60px;
  }

  .footer {
    padding: 100px 0px;
    background-color: #1e1e1e;
  }
  .footer p {
    color: white;
  }
  .btn-success {
    background-color: #22669c;
    border-color: #22669c;
    pointer-events: none;
  }
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  .form-control {
    padding: 15px 20px;
    color: #0a142f;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
  }
  .social2 {
    padding: 0px 5px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .footer .container-fluid {
      width: 85%;
    }
    .form-control {
      background-color: #1e1e1e;
      padding: 0.975rem 0.75rem;
      border-color: #22669c;
    }
    .btn-success {
      padding: 0px 25px;
      background: #22669c;
    }
    /* .text-center {
      display: none;
    } */
    .order {
      flex-direction: column-reverse;
    }

    .social {
      padding-bottom: 60px;
      display: flex;
    }
    .social1 {
      width: 50%;
      text-align: center;
    }

    .social3 {
      width: 50%;
      text-align: center;
    }
    .phone {
      margin-top: 15px;
    }
    .list {
      flex-direction: row;
    }

    .copy {
      padding-bottom: 50px;
    }

    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
    .mobile .list {
      display: flex;
      width: 100%;
      list-style: none;
    }
    .mobile .list li {
      padding: 0px 50px 0 0;
    }
    .align {
      padding-top: 40px;
    }

    .footer {
      padding: 30px 0px;
    }
  }
`;

export default Footer;
