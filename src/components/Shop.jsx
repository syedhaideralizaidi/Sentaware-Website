import React from "react";
import styled from "styled-components";
import shop_arrow from "../assets/shop_arrow.svg";

const Shop = () => {
  return (
    <Wrapper>
      <section class="shop-section" id="shop">
        <div class="container-fluid p-0 ">
          <div class="shop-content">
            <div class="row ">
              <div class="col-lg-7 col-md-6 col-sm-12">
                <h1>
                  Begin your i-sticks experience <span>today!</span>
                </h1>
              </div>
              <div class="row shop-content-p">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 visit">
                  <span>
                    <a href="http:#" class="visit-link">
                      Visit the Sensify Store
                    </a>
                    &emsp;&emsp;
                    <img src={shop_arrow} />
                  </span>
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
  .shop-content h1 {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
  }
  .shop-content span {
    font-weight: 600;
  }
  .shop-section {
    padding-top: 100px;
  }
  .shop-content p {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 19px;
    padding-bottom: 35px;
  }
  .shop-content-p {
    padding-top: 30px;
  }
  .visit-link {
    color: #22669c;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  .shop-content-p .visit {
    text-align: right;
  }

  @media Screen and (min-width: 320px) and (max-width: 767px) {
    .shop-section .container-fluid {
      width: 85%;
    }
    .shop-content {
      padding-top: 50px;
    }
    .shop-content h1 {
      font-size: var(--font-size-24px);
      font-weight: var(--font-weight-500);
      line-height: 28px;
    }
    .shop-content p {
      font-size: var(--font-size-14px);
      font-weight: var(--font-weight-300);
      line-height: 16px;
      font-family: "Inter", sans-serif;
      color: #1e1e1e;
    }
    .shop-content-p .visit {
      text-align: left;
      padding-bottom: 40px;
    }
  }
`;

export default Shop;
