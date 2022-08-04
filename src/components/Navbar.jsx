import React from "react";
import styled from "styled-components";
import logo_desktop from "../assets/logo_desktop.svg";
import logo_mobile from "../assets/logo_mobile.svg";
import carticon from "../assets/carticon.svg";
import hamburger from "../assets/hamburger.svg";
import user from "../assets/user.svg";
import { Outlet, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Nav = (props) => {

  const navigate=useNavigate();

  

 const handleClick = () => {
  
   window.location.reload();
   navigate('/');
  }

  const handleClickcart=()=>{

    navigate("/MainCheckout");
  }

  const handleClickout=()=>{
    console.log("clicked");
   window.localStorage.remove("userid-local_storage");
    window.localStorage.remove("local_id_store");
    window.localStorage.remove("Check_User_Login");
    window.localStorage.clear();
    window.localStorage.remove("local_id_store");
    window.location.reload();
    navigate("/");

  }

  const handleclicksign=()=>{
     var stri=localStorage.getItem("local_id_store");
     console.log("String is",stri);
     stri=parseInt(stri);
    
    if(localStorage.getItem("local_id_store")>0){
       console.log("inside signin local");
       Swal.fire({
        icon: 'success',
        title: 'Sorry!',
        text: `You are already Logged In.`,
        showConfirmButton: true,
        //confirmButton:(<button onClick={handleClickout} />),
        confirmButtonText: "Logout",
        showCancelButton: true,
        //timer: 1000,
    });
     navigate('/');}
     else{
       console.log("Get item is 1");
       navigate('/Signin');
     } 
  }

  const {amount}=useGlobalContext();
  return (
    
    <NavContainer>
       {/* <button onClick={handleclicksign}>use me</button> */}
      <div className="container-fluid p-0">
        <header class="header-fixed">
          <nav class="navbar navbar-expand-lg">
            <Link to="/" class="navbar-brand" href="#home" >
              <img class="mobile" src={logo_desktop} alt="Desktop_logo" />
              <img class="desktop" src={logo_mobile} alt="Mobile_logo" />
            </Link>
            <a class="nav-link nav-link-mobile" onClick={handleclicksign}>
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
                    to="/MainCheckout"
                    class="nav-link"
                    //href="./CheckOutPage.html"
                  >
                    <img src={carticon} alt="Cart_icon" />
                    <i class="fa font">&#xf07a;</i>
                    <span class='badge badge-warning' id='lblCartCount'> {amount} </span>
                  </Link>
                </li>
                <li class="nav-item-icon-cart">
                  <a class="nav-link" href="#user" onClick={handleclicksign}>
                    <img src={user} alt="User" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  
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

export default Nav;
