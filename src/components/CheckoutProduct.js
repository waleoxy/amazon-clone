import React from 'react'
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star"


function CheckoutProduct({ id, title, price, image, rating }) {
    return (
        <CheckoutProductWrapper>
            <div className="checkoutProduct">
                <img
                    className="checkoutProduct__image"
                    src={image}
                    alt="product image" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct_title">
                        {title}
                    </p>
                    <p className="checkoutProduct_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => {
                            return <StarIcon />
                        })}
                    </div>
                    <button>remove from basket</button>
                </div>
            </div>
        </CheckoutProductWrapper>
    )
}

export default CheckoutProduct

const CheckoutProductWrapper = styled.div`
.checkoutProduct{
    >img{
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}
}


`