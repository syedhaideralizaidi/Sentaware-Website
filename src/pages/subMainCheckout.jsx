import React from "react";
import Navbar from "../components/Navbar.jsx";
import CheckoutNav from "../components/CheckoutNav.jsx";
import Product_Cart from "../components/Product_Cart.jsx";
import Checkout from "../components/Checkout.jsx";
import Shipping from "../components/Shipping.jsx";
import Payment from "../components/Payment.jsx";
import Order_Review from "../components/Order_Review.jsx";
import Thankyou from "../components/Thankyou.jsx";
import Footer from "../components/Footer.jsx";
import { useGlobalContext } from "../context/context";
import {Elements} from '@stripe/react-stripe-js';



function subMainCheckOut() {

  

  const { cart } = useGlobalContext();
  return (
    <>
    
      <Navbar />
      <CheckoutNav />
      {cart.map((item) => {
        return <Product_Cart key={item.id} {...item} />;
      })}
      {cart.map((item) => {
        return <Checkout key={item.id} {...item} />;
      })}
    
      {/* <Shipping /> */}
      
    
      {cart && cart.filter((item)=>(item.id===1 )).map((item)=>{return <Shipping key={item.id} {...item} />})}
      
    <Elements>
      <Payment />
    </Elements>
      {cart.map((item) => {
        return <Order_Review key={item.id} {...item} />;
      })}
      <Thankyou />
      <Footer />
      
    </>
  );
}

export default subMainCheckOut;
