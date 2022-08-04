import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import Axios from "axios";
import Cardsection from "./Cardsection";
import Swal from 'sweetalert2'
import { useGlobalContext } from "../../context/context";
import {test} from "./App.jsx";

const CheckoutForm=(props)=> {

    const {total}=useGlobalContext();
    var totalfinal=total;
    totalfinal+=(total/total)*10;
    totalfinal+=total*0.1;
    //console.log("props data",test());
    var valu=test();
    //console.log("Valu",valu,"Type",typeof(valu));
    var newval=parseInt(valu);
   // console.log("new Valu",newval,"Type",typeof(newval));
    
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let value="";
    const { stripe, elements } = props;
    if (!stripe || !elements) {
      return;
    }
    console.log("Inside handleSubmit");
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
      Swal.fire({
        icon: 'warning',
        title: 'Payment Failed',
        text: "Unable to process your payment!",
        showCancelButton: false,
        confirmButtonText: 'Try Again',
        
    })
    } else {
      console.log("Result Token: ",result.token);
      value=result.token.id;
      //console.log("Value: ",value);
      Swal.fire({
        icon: 'success',
        title: 'Payment Added!',
        text: "Order Placed Successfully! Press Continue to Track your Order",
        showConfirmButton: false,
        timer: 2500,
    });
    }
    
    const obj={
      "Url": "/do-rapid-pay",
        "CartRequest": {
          "TotelAmount": 50,
          "OrderId": 11,
          "TokenId": "tok_1LQpCXLocYDVe0iYkbQE7woQ"
        }
      }
      obj["CartRequest"]["OrderId"]=newval; 
      obj["CartRequest"]["TotelAmount"]=totalfinal;
       obj["CartRequest"]["TokenId"]=value;
       

    let api='https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/do-rapid-pay';

    Axios.post(api,obj).then(res=>{
      //console.log("Response: ",obj);
      console.log("Response: ",test());
      console.log("Response Data Axios: ",res.data);
    })
  console.log("Value: ",obj);
  };

 
    return (
      <div>      
        <form>
          <Cardsection />
          <div class="alignment-order">
                <div class="col continue1">
                  <button disabled={!props.stripe} onClick={handleSubmit}>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Pay Now
                    </a>
                  </button>                  
                </div>
              </div>
        </form>
      </div>
    );
  }


export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}