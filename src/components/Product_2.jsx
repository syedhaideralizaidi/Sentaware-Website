import React from "react";
import styled from "styled-components";
import Mockup_revised9 from "../assets/Mockup_revised9.jpg";
import sub from "../assets/sub.svg";
import add from "../assets/add.svg";
import cart_icon from "../assets/cart_icon.svg";
import { useGlobalContext } from "../context/context";
import CheckoutNav from "./CheckoutNav";
import Mockup_revised16 from "../assets/Mockup_revised16.jpg";
import Mockup_revised17 from "../assets/Mockup_revised17.jpg";

function Product_2({ id, price, amount }) {
  const { remove, increase, decrease, toggleAmount, addToCart,checkk } =
    useGlobalContext();
  return (
    <Wrapper>
      <section class="cart-section" id="shop">
        <div class="container-fluid p-0">
          <div class="cart-content second-cart-padding">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div
                  id="carouselExampleIndicators1"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={Mockup_revised16}
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-item">
                        <img
                          src={Mockup_revised9}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src={Mockup_revised9}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  {/* <!-- <button class="carousel-control-prev" type="button"
                          data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev"> -->
                      <!-- <img src="./img/greater.svg" alt=""> -->
                      <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                      <!-- <span class="visually-hidden">Previous</span>
                      </button> -->
                      <!-- <button class="carousel-control-next" type="button"
                          data-bs-target="#carouselExampleIndicators1" data-bs-slide="next"> -->
                      <!-- <img src="./img/less.svg" alt=""> -->
                      <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                      <!-- <span class="visually-hidden">Next</span>
                      </button> --> */}
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 cart-alignment">
                <div class="col-12">
                  <p class="cart-main-header">
                    i-Sticks 16-scent Evaluation and Therapy kit
                  </p>
                  <p class="cart-des">
                    The 16-scent Evalution and Therapy kit will help you
                    evaluate the following abilities -
                    <ol>
                      <li>Odor Identification</li>
                      <li> Odor Differentiation </li>
                      <li> Odor Intensity </li>
                    </ol>
                    Package includes 16 scented tubes.
                  </p>

                  <div class="d-flex">
                    <span class="income">{price}</span>

                    <span class="qty-hide">Qty :</span>

                    <span>
                      <img src={sub} class="mb-dp" onClick={() => decrease(id)} />
                      &emsp;{amount}&emsp;
                      <img src={add} class="mb-dn" onClick={() => increase(id)} />
                    </span>
                  </div>
                  {/* <!-- <div class="btn-alignment">
                          <div class="d-flex" style="justify-content: space-around;">
                              <button class="btn-add-to-cart"><img src="./img/cart icon.svg" />&emsp;Add to
                                  cart</button>&nbsp;&nbsp;
                              <button class="btn-buy-now">Buy now</button>
                          </div>
                      </div> --> */}
                  <div class="btn-alignment">
                    <div
                      class="d-flex"
                      style={{ justifyContent: "space-around" }}
                    >
                      <div class="">
                        <button class="btn-add-to-cart ripple">
                          <img src={cart_icon} />
                          &emsp;Add to cart
                        </button>
                      </div>
                      <div class="">
                        <button class="btn-buy-now ripple1">Buy now</button>
                      </div>
                    </div>
                  </div>
                  <p class="note">
                    Note :
                    <span>
                      To be used with Sensify Intelli App for best results.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .carousel-indicators [data-bs-target] {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #4e4e4e;
  }

  .carousel-item {
    padding-bottom: 50px;
  }

  .carousel-indicators {
    left: -430px;
  }
  .cart-content .cart-main-header {
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    padding-bottom: 24px;
  }
  .cart-content .cart-des {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 15px;
  }
  .cart-content .income {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    padding-right: 80px;
  }

  .cart-content span {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    padding-right: 30px;
  }
  .btn-add-to-cart {
    color: #22669c;
    background-color: #fff;
    padding: 15px 30px;
    text-align: center;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.2);
    border-radius: 28px;
  }

  .mb-dp:hover {
    border : 1px solid #22669c;
    

  }


  .mb-dn:hover {
    border : 1px solid #22669c;

  }
  .btn-buy-now {
    box-shadow: 0px 8px 16px rgba(75, 168, 253, 0.5);
    border-radius: 28px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    background-color: #22669c;
    color: #fff;
    padding: 15px 20px;
    text-align: center;
    border: none;
  }
  .note span {
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
  .note {
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
  .cart-alignment {
    padding-left: 70px;
  }
  .btn-alignment {
    padding-top: 40px;
    padding-bottom: 30px;
  }
  .carousel-control-prev,
  .carousel-control-next {
    padding-top: 350px;
    filter: invert(100%);
  }
  .carousel-control-prev {
    left: 380px;
  }
  .carousel-control-next {
    right: -20px;
  }
  .second-cart-padding {
    padding-bottom: 120px;
  }
  .ripple {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple:hover {
    background: #f8f8f8 radial-gradient(circle, transparent 1%, #f8f8f8 1%)
      center/15000%;
  }
  .ripple:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
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

  /* Button style */
  button {
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    background-color: #2196f3;
    box-shadow: 0 0 4px #999;
    outline: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .cart-alignment {
      padding-left: 12px;
    }
    .cart-section .container-fluid {
      width: 85%;
    }
    .cart-content .cart-main-header {
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    .cart-content .cart-des {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
    }
    .qty-hide {
      display: none;
    }
    .carousel-indicators {
      left: 0px;
    }
    .note {
      display: none;
    }
    /* .width-mobile-btn {
      width: 50%;
    } */
  }
`;

export default Product_2;
