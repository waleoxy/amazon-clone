import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import styled from "styled-components";

function Product({ title, price, image, rating }) {
    return (
        <ProductWrapper>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => {
                        return <StarIcon />
                    })}

                </div>
            </div>
            <img
                src={image}
                alt="product image" />
            <button>add to basket</button>
        </ProductWrapper >
    )
}

export default Product

const ProductWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
background-color: white;
margin: 10px;
padding: 15px;
width: 100%;
max-height: 400px;
min-width: 100px;
z-index: 1;

>img{
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}

>button{
    background: var(--amazonYellow);
    border: 1px solid;
    margin-top: 10px;
    text-transform: capitalize;
    border-color: #a88734  #9c7e31 #846a29;
}

.product__price{
    margin-top: 5px;
}

.product__info{
    height: 100px;
    margin-bottom: 15px;
    text-transform: capitalize;
}
.product__rating{
    color: var(--amazonYellow);
    display: flex;
}

`