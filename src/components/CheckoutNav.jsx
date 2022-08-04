import React from "react";
import styled from "styled-components";
// import Navbar from "./Navbar.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";


function CheckoutNav  () {

  const[appState,changeState]=useState("");

  
  
  
  const handleClickCart = () => {
    // 👇️ navigate programmatically
    console.log("Inside handleClickCart");
    if(window.location.pathname==='/Main_Checkout')
    {
      let appState=true;
      changeState(appState);
    }
    else{
      let appState=false;
      changeState(appState);
    }
  };

  const handleClickShipping = () => {
    // 👇️ navigate programmatically
    //navigate('/Shipping');
    if(window.location.pathname==='/Shipping'){
      console.log('inside shipping');
      let appState=false;
      changeState(appState=true);    
    }
    else{
      let appState=false;
      changeState(appState=false);
    }
  };

  const handleClickOrder_Review = () => {
    // 👇️ navigate programmatically
    if(window.location.pathname==='/Order_Review')
    {
      let appState=false;
      changeState(appState=true);
    }
    else{
      let appState=false;
      changeState(appState=false);
    }
    
    //navigate('/Order_Review');
  };

  const handleClickPayment = () => {
    // 👇️ navigate programmatically
    if(window.location.pathname==='/Payment')
    {
      let appState=true;
      changeState(appState);
    }
    else{
      let appState=false;
      changeState(appState);
    }
  };

  return (
    <Wrapper>
      <section class="second-navbar">
        <div class="container-fluid p-0">
          <header class="header-fixed">
            <nav class="navbar-expand-lg navbar-light ">
              
              {/* {appState.objects.map((elements,index)=>( */}


              <div class="navbar-nav a-margin" >
                <NavLink
                  to="/MainCheckout"
                  
                  className={({ isActive }) => (isActive ? "nav-link new active newline" : " nav-link navbar-2 active")}
                >
                  Cart<span class="line"></span>
                </NavLink>
                <NavLink
                  to="/Shipping"
                  className={({ isActive }) => (isActive ? "nav-link new active" : " nav-link navbar-2 active")}
                >
                  Shipping<span class="line"></span>
                </NavLink>

                 <NavLink
                  to="/Order_Review"
                  className={({ isActive }) => (isActive ? "nav-link new active" : "nav-link navbar-2 active")}
                >
                  Order Review<span class="line"></span>
                </NavLink>

                <NavLink
                  to="/Payment"
                  className={({ isActive }) => (isActive ? "nav-link new active" : " nav-link navbar-2 active")}
                >
                  Payment<span class="line"></span>
                </NavLink>
               
              </div>
              {/* ))} */}
            </nav>
          </header>
        </div>
      </section>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .second-navbar {
    padding-top: 174px;
  }
  .navbar-2  {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    font-style: var(--font-sytle-normal);
    color: var(--font-color-for-header);
    line-height: 19px;
    padding-bottom: 15px;
  }
  .line {
    margin-top: 5px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 5px;
    display: block;
  }

  

  .navbar-2:hover .line {
    background-color: #26649d;
    cursor: pointer;
  }
  
  .navbar-2:hover {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-600);
    line-height: 19px;
    cursor: pointer;
  }

  .new  {
    font-size: 22px;
    font-weight: var(--font-weight-600);
    line-height: 19px;
    //cursor: pointer;
    color: var(--font-color-for-header);
    
  }
  
  .navbar-2:active {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-600);
    line-height: 19px;
    //cursor: pointer;
  }


  .navbar-3{
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-600);
    line-height: 19px;
    cursor: pointer;
    
    font-style: var(--font-sytle-normal);
    color: var(--font-color-for-header);
    padding-bottom: 15px;
  }

  .line3{
    margin-top: 5px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 5px;
    display: block;
    cursor: pointer;
  }

  .navbar-3:active .line3 {
    background-color: #26649d;
    cursor: pointer;
  }

  .newline{
    margin-top: 55px;
    height: 1px;
    background-color: #ffffff;
    border-radius: 5px;
    display: block;
  }

  .navbar-3 {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-600);
    line-height: 19px;
    cursor: pointer;
  }
  
  .active:active {
    transform: scale(0.98);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
  }


  @media Screen and (min-width: 320px) and (max-width: 767px) {
    .navbar-nav {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .container-fluid {
      width: 100%;
    }
    .a-margin a {
      margin: 0px 15px !important;
    }
  }
  .a-margin a {
    margin: 0px 40px;
  }
`;

export default CheckoutNav;
