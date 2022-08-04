import React, { useState } from "react";
import styled from "styled-components";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";


function Product_Cart  (props) {
  const {total } = useGlobalContext(); 
  
  const [nav,SetNav]=useState([]);
  const navigate = useNavigate();
  

   const handleClicktest=(link,obj)=>{
   // console.log("handleClicktest",obj,link);
    
   props.onClick(link,obj);
   //console.log("handleClicktest",link,obj);
   //navigate(link,{state:{obj}});
  }
  const handleClick = () => {
    // 👇️ navigate programmatically
     if(window.location.href==='http://localhost:3000/MainCheckOut')
     {
      console.log("Inside handleClick",window.location.href);
      navigate('/Shipping');
   
    }
    // else if(window.location.href==='http://localhost:3000/Shipping')
    // {
    //   console.log("Inside handleClick",window.location.href);
    //   navigate("/Payment");
    // }
    else if(window.location.href==='http://localhost:3000/Payment')
    {
      console.log("Inside handleClick",window.location.href);
      navigate("/Order_Review");
    }
    else if(window.location.href==='http://localhost:3000/Order_Review')
    {
      console.log("Inside handleClick",window.location.href);
      navigate("/Thankyou");
    }
    console.log("Inside handleClick",window.location.href);
    
    //navigate('/Shipping');
  };
  var totalfinal=total;
  totalfinal+=(total/total)*10;
  totalfinal+=total*(0.1);

  // var total=0;
  // var Subtotal=0;
  // var shipping=10;
  // const tax = 10;

  // useState(() => {
  //   if(cart != null) {
  //   console.log('inside cart');
  //   Subtotal = 0;
  //   total = 0;

  //   cart.map((item)=>{
  //     Subtotal += item.amount * item.price;

  //   })
  //  total = Subtotal;

  //   if(tax >0){
  //     total += total * (tax/100);
  //   }

  //   total += shipping;
  //   }
  // },[cart])
  
  return (
    
    <Wrapper>
      
        <div class="container-fluid padding-0">
          <div class="">
            {/* <div class="col-lg-9"></div> */}

            <div class="mobile-line">
              {/* <img src={line_1} alt="" /> */}
              <hr style={{ marginLeft: "60px", width: "105%" }} />
            </div>
            {/* <div class="col-lg-3  col-md-6 col-sm-12 order"></div> */}
            <div class="order">
              <div className="s" style={{ display: "flex" }}>
                <span style={{ fontWeight: "500" }}>Order summary</span>
                {/* <img src={line_2} class="mb" /> */}
                <hr
                  style={{
                    marginLeft: "20px",
                    width: "50%",
                  }}
                  class="mb"
                />
              </div>
              <div
                class="col"
                style={{ fontWeight: "500", paddingBottom: "20px" }}
              >
                i-Sticks, Scent Evaluation kit
              </div>
              <div class="alignment-order">
                <table class="table table-borderless">
                  <tbody>
                    <tr class="t">
                      <td>Total</td>
                      <td>${totalfinal}</td>
                    </tr>
                    <tr class="text">
                      <td>Sub-total</td>
                      <td>${total}</td>
                    </tr>
                    <tr class="text">
                      <td>Tax</td>
                      <td>10%</td>
                    </tr>
                    <tr class="text">
                      <td>
                        Shipping
                        <br />
                        <span>(4-7 business days)</span>
                      </td>
                      <td>$10.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="alignment-order">
                <div class="col custom-select">
                  <select>
                    <option value="0">Standard delivery</option>
                  </select>
                </div>
              </div>
              <div>
                {/* <img src={line_3} alt="" /> */}
                <hr className="hr" style={{ paddingTop: "2px" }} />
                <table class="table table-borderless">
                  <tbody>
                    <tr class="tr">
                      <td>Total</td>
                      <td style={{ paddingLeft: "170px" }}>${total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="alignment-order">
                <div class="col continue">
                  <button onClick={handleClicktest} type="submit" value="Submit">
                    <a
                      style={{ textDecoration: "none", color: "white",textAlign:"center" }}
                    >
                      Continue
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tr {
    display: none;
  }
  .hr {
    display: none;
  }
  .container-fluid {
    width: 63%;
  }
  .padding-0{
    padding-right:0;
    padding-left:0px;
}
  .mb {
    display: none;
  }
  .s {
    padding-bottom: 20px;
  }
  .tr {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  /* product-cart */
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .t {
      display: none;
    }
    .hr {
      display: block;
    }
    .tr {
      display: block;
    }
    .mb {
      display: block;
    }
    .mobile-line {
      display: block !important;
      padding-top: 20px;
      padding-bottom: 10px;
    }
    .mobile-line1 {
      display: block !important;
      padding-top: 20px;
      width: 100%;
    }
    .order {
      box-shadow: none;
    }
    .order {
      padding: 0px !important;
      padding-left: 0px !important;
      //   display: none;
      //   padding: 0px 20px;
    }
    .alignment-order {
      padding-bottom: 10px;
    }
    .custom-select select {
      width: 80%;
      padding: 12px 0px;
      border: 1px solid #26649d;
      border-radius: 8px;
      font-weight: 300;
      font-size: 12px;
      line-height: 19px;
    }
    .custom-select {
      justify-content: center;
    }
    .continue button {
      width: 80%;
    }
  }
  .mobile-line {
    display: none;
  }
  .mobile-line1 {
    display: none;
  }
  .order {
    box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 35px 32px 20px 32px;
    height: auto;
  }
  .text {
    font-size: 12px;
    font-weight: var(--font-weight-300);
    font-style: var(--font-sytle-normal);
    line-height: 14px;
    color: rgba(0, 0, 0, 0.55);
  }
  .custom-select select {
    width: 100%;
    padding: 12px 0px;
    border: 1px solid #26649d;
    border-radius: 8px;
    font-weight: 300;
    font-size: 12px;
    line-height: 19px;
  }
  .continue {
    padding-top: 0px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width: 100%;
  }
  /* product-cart end */
`;

export default Product_Cart;
