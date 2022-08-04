import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LOAgCLocYDVe0iYLVV1VLadghurJPIunOlYlLuQfHr2kYSiWwAqj8nIbBd4rmKoJQ5DRQyquix1Q1BrssP6xRGP00XqsUlfCk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}