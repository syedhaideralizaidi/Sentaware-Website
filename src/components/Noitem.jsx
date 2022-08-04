import React from "react";
import styled from "styled-components";
import Product_Cart from "./Product_Cart";
import product from "../assets/product.svg";
import sub from "../assets/sub.svg";
import add from "../assets/add.svg";
import outline from "../assets/outline.svg";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router";
import HomePage from "../pages/HomePage";

const Checkout = ({id,price,amount,main_header}) => {
  const navigate = useNavigate();
  
  
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/');
  };
  const back=()=>{
    window.location.reload();
  };
  const { increase,decrease,cartItems,remove } = useGlobalContext();
  return (
    <Wrapper>
        <br></br>
                <br></br>
                <br></br>
                
      <section class="myclass">
        <div class="">
          <div class="">
            <div class="col-lg-10">
              <div
                class="firstrow"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                
                <span
                style={{fontWeight:"500",fontSize:"16px",lineHeight:"19px",color:"#4E4E4E",marginTop:'200px',marginLeft:'300px' ,padding:'100,20px,20px,px'}}>No Items added to Cart.
                
                </span>
                
      
              </div>
            </div>
          </div>
        </div>
        <div class="alignment-order">
                <div class="col continue">
        <button class="continue" onClick={back}>
        <a style={{ textDecoration: "none", color: "white",textAlign:"center" }} onClick={handleClick}>Back to Add Items</a></button>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>

      
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .continue {
    padding-top: 0px;
    margin-right: 440px;
    cursor: pointer;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    padding: 10px 0px 10px 10px;
    color: white;
    width: 100%;
  }
  .pad{
    padding-top:60px;
  }

  .myclass{
    height:50vh;
    width:100%;
  }

  .btn-buy-now {
    box-shadow: 0px 8px 16px rgba(75, 168, 253, 0.5);
    border-radius: 28px;
    font-weight: 600;
    font-size: 13px;
    line-height: 12px;
    background-color: #22669c;
    color: #fff;
    padding: 15px 20px;
    text-align: center;
    border: none;
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
  /* cart */
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .cart .container-fluid {
      width: 85%;
    }

    .btn-alignment {
      padding-top: 40px;
      padding-bottom: 30px;
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
  .firstrow p span {
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

export default Checkout;
