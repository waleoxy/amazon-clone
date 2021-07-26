import { Link } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from "./CheckoutProduct";


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (



        <PaymentWrapper>
            <div className="payment">
                <div className="payment__container">
                    <h1>
                        Checkout {
                            <Link to="/checkout"></Link>
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
                        <div className="payment_details">
                            {/*stripe magic */}

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

`