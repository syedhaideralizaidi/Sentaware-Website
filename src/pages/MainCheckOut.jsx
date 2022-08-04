import React from "react";
import Navbar from "../components/Navbar.jsx";
import CheckoutNav from "../components/CheckoutNav.jsx";
import Product_Cart from "../components/Product_Cart.jsx";
import Checkout from "../components/Checkout.jsx";
import Footer from "../components/Footer.jsx";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import SubCheckout from "../components/SubCheckout.jsx";
import Noitem from "../components/Noitem.jsx";
import { useNavigate } from "react-router-dom";

function MainCheckOut() {
  const { cart,amount } = useGlobalContext(); 
  const navigate=useNavigate();
  let isok=false;

  let linkval='/Shipping';
  let objval={haider:'Shipping'};

  const getData=(linkval,objval)=>{
      console.log("getData Linked: ",linkval);
      console.log("Check log: ",localStorage.getItem("local_id_store"));
      navigate('/Shipping',{state:{objval}});
  }

  
  const test=amount;
  if(test>0)
  {
    console.log("Inside isok true");
    isok=true;
  }
  else{
    console.log("Inside isok false");
    isok=false;
  }

  if(isok){
  return (
    <Wrapper>
      <Navbar />
      <CheckoutNav />

    <div className="row container testing">
      <section  className='col-md-8' >
      <div class="col">
      <div class="row yourcart">
        {/* {cart.map((item) => {
        return <Product_Cart key={item.id} {...item} />;
      })} */}
      
      <SubCheckout link={linkval} obj={objval} />
      {cart && cart.filter((item)=>((item.id===2 || item.id===1) && item.amount>0 ) ).map((item)=>{return <Checkout key={item.id} {...item} />})}
      
     </div>
     </div>
      </section>

      <div class="col col-md-4 pad">
        <Product_Cart onClick={getData}  />
      </div>
    </div>

      <Footer />
    </Wrapper>
  );
  }
  else if(!isok){
    return (
      <Wrapper>
        <Navbar />
    
  
      <div className="row container testing">
        <section  className='col-md-8' >
        <div class="col">
        <div class="row yourcart">
          {/* {cart.map((item) => {
          return <Product_Cart key={item.id} {...item} />;
        })} */}
        
      
        
        
       </div>
       </div>
       <Noitem />
        </section>

      </div>
  
        <Footer />
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`

.testing{
  margin-left:120px;
  margin-right:120px;
  align-items:row;
  padding-left:130px;
  padding-right:160px;
}


body {
 
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
.dashboard {
  display: inline-block;
   }

   * {
   box-sizing: border-box;
   font-family: "Work Sans", sans-serif;
}
 
   `;
export default MainCheckOut;
