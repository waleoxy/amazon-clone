import StarIcon from '@material-ui/icons/Star';
import React, { useState } from 'react';
import styled from "styled-components";
import { initialState } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const [basketItem, setBasketItem] = useState(initialState)

    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        })
    }

    return (
        <ProductWrapper>
            <div className="product">
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
                <button onClick={addToBasket} >add to basket</button>
            </div>
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
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    z-index: 1;

.product > img{
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}

.product > button{
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