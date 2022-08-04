import React from "react";
import "./styles.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51LOAgCLocYDVe0iYLVV1VLadghurJPIunOlYlLuQfHr2kYSiWwAqj8nIbBd4rmKoJQ5DRQyquix1Q1BrssP6xRGP00XqsUlfCk");

var num=0;

const App = (props) => {
 
  num=props.id;
   console.log("Inside App.jsx: ",num);  

  return (
    
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm data={num} />
          </Elements>
        </div>
      
  );
};
function test(){
  return num;
}
export default App;
export { test };