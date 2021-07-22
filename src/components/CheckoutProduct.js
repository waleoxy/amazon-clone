import React from 'react'
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star"
import { useStateValue } from '../context/StateProvider';


function CheckoutProduct({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

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
                    <button onClick={removeFromBasket}>remove from basket</button>
                </div>
            </div>
        </CheckoutProductWrapper>
    )
}

export default CheckoutProduct

const CheckoutProductWrapper = styled.div`
.checkoutProduct{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;

    >img{
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
    }
}
.checkoutProduct__info{
  padding-left: 20px;

  >button{
      background: var(--amazonYellow);
      border: 1px solid;
      margin-top: 10px;
      border-color: #a88734  #9c7e31 #846a29;
      color: #111;
  }
}

.checkoutProduct__image{
 object-fit: contain;
 width: 180px;
 height: 180px;
}
.checkoutProduct__title{
font-size: 17px;
font-weight: 800px;
}

`