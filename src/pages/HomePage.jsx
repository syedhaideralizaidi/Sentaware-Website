import React from "react";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Sticks from "../components/Sticks.jsx";
import Olfactory from "../components/Olfactory.jsx";
import Olfaction from "../components/Olfaction.jsx";
import Tutorials from "../components/Tutorials.jsx";
import Shop from "../components/Shop.jsx";
import Cart from "../components/Cart.jsx";
import Footer from "../components/Footer.jsx";
import { useGlobalContext } from "../context/context";
import {useNavigate} from "react-router-dom";
import logo_desktop from "../assets/logo_desktop.svg";
import logo_mobile from "../assets/logo_mobile.svg";
import carticon from "../assets/carticon.svg";
import hamburger from "../assets/hamburger.svg";
import user from "../assets/user.svg";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import {Modal,ModalHeader} from "reactstrap";
import {useState} from 'react';
import Signup from "../components/Login Pages/Signup.jsx";
import Signin from "../components/Login Pages/Signin.jsx";
import Popup from "../components/Popup.jsx";
import { useLocation } from "react-router-dom";

function HomePage() {

  const location = useLocation();
  const [modal,Setmodal]=useState(false);
  localStorage.setItem("Check_User_Login",0);

  document.title = 'Sentaware - Smeel your way to good health';
  const { cart,cartItems } = useGlobalContext();
  const navigate =useNavigate();

  const handleClick = () => {
  
    window.location.reload();
  }

  const handleClickcart=()=>{
    navigate("/MainCheckout");
  }
  const handleclicksign=()=>{
    var stri=localStorage.getItem("Check_User_Login");
    console.log("String is",stri);
    
    if(localStorage.getItem("Check_User_Login")===1){
      console.log("inside signin local");
    navigate('/');}
    else{
      console.log("Get item is 1");
      navigate('/Signin');
    }
    //console.log("helloo"); 
    //navigate('/');
    
  }
  const handlemodal=()=>{
    Setmodal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    
    <>

      <Navbar/>

      {/* <Modal size="lg" isOpen={modal} toggle={()=>Setmodal(!modal)}>
        <ModalHeader toggle={()=>Setmodal(!modal)}>
            Oopup
        </ModalHeader>
        <ModalBody>
          <Signup/>
        </ModalBody>
      </Modal> */}
      {/* My Navbar static */}

      {/* <NavContainer>
      <div className="container-fluid p-0">
        <header class="header-fixed">
          <nav class="navbar navbar-expand-lg" onClick={handleClick}>
            <Link to="/" class="navbar-brand" href="#home">
              <img class="mobile" src={logo_desktop} alt="Desktop_logo" />
              <img class="desktop" src={logo_mobile} alt="Mobile_logo" />
            </Link>
            <a class="nav-link nav-link-mobile" onClick={handleClickcart}>
              <img src={carticon} alt="Cart_icon" />
             
            </a>

            <span
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img src={hamburger} alt="Hamburger_icon" />
              </span>
            </span>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#mission">
                    Mission
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tutorials">
                    Tutorials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#shop" onClick={handleclicksign}>
                    Shop
                  </a>
                </li>
                <li class="nav-item-icon-cart cart-mobile">
                  <Link
                    to="/Signin"
                    class="nav-link"
                    href="./CheckOutPage.html"
                  >
                    <img src={carticon} alt="Cart_icon" />
                    <i class="fa font">&#xf07a;</i>
                    <span class='badge badge-warning' id='lblCartCount'> {amount} </span>
                  </Link>
                </li>
                <li class="nav-item-icon-cart hcart">
                  <a class="nav-link" onClick={()=> Setmodal(true)} >
                    <img src={user} alt="User" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      </NavContainer> */}

      {/* {modal &&
      (
        
      <div className="overlay">
        <Signin closemodel={Setmodal} />
        </div>
      )
      } */}

  

    
      {/* End static navbar */}
      <Hero />
      <Sticks />
      <Olfactory />
      <Olfaction />
      <Tutorials />
      <Shop />
      {/* {cart.map((item) => {
        return <Cart key={item.id} {...item} />;
      })} */}

    {cart && cart.filter((item)=>item.id===2 || item.id===1).map((item)=>{return <Cart key={item.id} {...item} />})}
      <Footer />

      {/* {modal &&
      
    
      <Signup closemodel={Setmodal} />
       
      } */}


    </>
  );
};
const NavContainer = styled.nav`
  
body.active-modal {
  overflow-y: hidden;
}

.hcart:hover {
  cursor: pointer;
}

.modal, .overlay {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}

.overlay {
  background: rgba(49,49,49,0.8);
}
.modal-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
}


.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}
.font{
  font-size: 2px;
}
.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
    font-size: 12px;
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px; 
}

.navbar {
    background-color: white;
    padding: 38px 0px 39px 0px;
    position: fixed;
    z-index: 1;
    width: 63%;
    filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.2));
    border-radius: 0px 0px 8px 8px;
  }
  .navbar-nav {
    margin-left: auto;
  }
  .container-fluid {
    width: 63%;
  }
  .navbar-brand {
    padding-left: 82px;
  }
  /* .navbar-collapse {
  padding-right: 42px;
} */
  .nav-item {
    padding: 0px 11px;
  }
  .nav-item-icon-cart {
    padding: 0px 35px 0 25px;
  }
  .navbar-nav .nav-link {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-500);
    font-style: var(--font-sytle-normal);
    color: var(--font-color-for-header);
    line-height: 19px;
  }
  .navbar-brand .desktop {
    display: none;
  }
  .navbar-brand .mobile {
    display: block;
  }
  .nav-link-mobile {
    display: none;
  }
  @media screen and (min-width: 992px) and (max-width: 1150px) {
    .navbar-brand {
      padding-left: 15px;
    }
  }
  @media Screen and (min-width: 320px) and (max-width: 767px) {
    .nav-link-mobile {
      display: block;
    }
    .cart-mobile {
      display: none;
    }

    .navbar {
      width: 100%;
      border-radius: 0px 0px 0px 0px;
    }
    .nav-item-icon-cart {
      padding: 0px 0px 0px 20px;
    }
    .navbar-brand .mobile {
      display: none;
    }
    .navbar-brand .desktop {
      display: block;
    }
    .container-fluid {
      width: 100%;
    }
    .navbar-brand {
      padding-left: 30px;
    }
    .navbar-nav {
      margin-left: 10px;
    }
    .navbar-toggler {
      padding: 0.25rem 2rem;
    }
  }
`;



export default HomePage;