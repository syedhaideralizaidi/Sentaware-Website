import React from "react";
import styled from "styled-components";
import Product_Cart from "./Product_Cart";
import product from "../assets/product.svg";
import sub from "../assets/sub.svg";
import add from "../assets/add.svg";
import outline from "../assets/outline.svg";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router";

const SubCheckout = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/Shipping');
  };
  const { amount} = useGlobalContext();
  return (
    <Wrapper>
      <section class="">
        <div class="">
          <div class="">
            <div class="col-lg-11">
              <div class="row yourcart">
                <div class="col-6" style={{ paddingLleft: "0px;" }}>
                  <img
                    src=''
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                  />
                  Your Cart
                </div>
                <div class="col-6 left">{amount} items</div>
              </div>
              <div class="">
                <hr />
              </div>
                </ div >
                </ div>
                </ div>
                
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  /* cart */
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .cart .container-fluid {
      width: 85%;
    }
    .yourcart {
      padding-top: 20px;
    }
    .arrowHide {
      display: none;
    }
    .firstrow td {
      font-size: 10px;
      font-weight: var(--font-weight-300);
      font-style: var(--font-sytle-normal);
      line-height: 12px;

      padding-top: 20px;
    }
    .firstrow .cart-number-img {
      padding-top: 33px;
    }
    .mb-dp {
      display: block;
      padding-left: 25px;
      padding-bottom: 20px;
    }
    .mb-dn {
      display: block;
      padding-left: 25px;
      padding-top: 20px;
    }
    .table-text .add {
      padding-top: 33px;
    }
    .cart-total {
      display: none;
    }
  }
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  .left {
    text-align: center;
  }
  .firstrow td {
    font-size: 12px;
    font-weight: var(--font-weight-300);
    font-style: var(--font-sytle-normal);
    line-height: 14px;
    color: rgba(0, 0, 0, 0.55);
    padding-top: 20px;
  }
  .firstrow p {
    font-size: 12px;
    font-weight: var(--font-weight-300);
    font-style: var(--font-sytle-normal);
    line-height: 14px;
    color: rgba(0, 0, 0, 0.55);
    padding-top: 20px;
  }
  .firstrow .cart-number-img {
    padding-top: 70px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #4e4e4e;
  }
  td.table-text.add {
    width: 25%;
    padding-top: 70px;
  }
  /* cart end */
`;

export default SubCheckout;
