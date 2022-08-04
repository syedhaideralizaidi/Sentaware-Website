import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { PaymentFormContainer,FormContainer } from "./payment-form-styles";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      width:'100%',
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

function CardSection() {
  return (
    <PaymentFormContainer>
        <FormContainer >
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      </FormContainer >
    </PaymentFormContainer>
  );
}

export default CardSection;