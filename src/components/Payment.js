import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import styled from "styled-components";
import { getBasketTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import axios from "../context/axios";

function Payment() {

    const history = useHistory();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(true);
    const [clientSecret, setClientSecret] = useState(true)

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total = ${getBasketTotal(basket) * 100}`

            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log(`/payments/create?total = ${getBasketTotal(basket) * 100}`);
    console.log(`${getBasketTotal(basket)}`);
    console.log("the secret", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace("/order")
        })
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <PaymentWrapper>
            <div className="payment">
                <div className="payment__container">
                    <h1>
                        Checkout: {
                            <Link to="/checkout">{basket?.length} Items</Link>
                        }
                    </h1>
                    {/*payment section: address */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>5 Ibironke Avenue</p>
                            <p>Ikotun, Lagos</p>
                        </div>
                    </div>
                    {/*payment section: Review items */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item =>
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )}
                        </div>
                    </div>
                    {/*payment section: payment merhod */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                            {/*stripe magic */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={disabled || processing || succeeded}>
                                        <span>{(processing) ? <p>Processing...</p> : "Buy now"}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </PaymentWrapper>
    )
}

export default Payment

const PaymentWrapper = styled.div`
.payment{
    background-color: white;
}
.payment__container > h1{
    text-align: center;
    padding: 10px;
    font-weight: 400;
    border-bottom: 1px solid lightgray;
    border-color: rgb(234, 237, 237) ;
}
.payment__container > h1 a{
 text-decoration: none;
}

.payment__section{
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border: 1px solid lightgray;
}
.payment__title{
    flex: 0.2;
}

.payment__address, .payment__items, .payment__details{
    flex: 0.8;
}

`