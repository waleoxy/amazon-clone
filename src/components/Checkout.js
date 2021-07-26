import React, { useState } from 'react';
import styled from "styled-components";
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from "./SubTotal";

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <CheckoutWrapper>
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1VXUymojlDFIHU9I5y45_fcWiuJSRNG1P8xoa6cfBTQK1Cxn_aUyTibYKxyZSuFUFg&usqp=CAU"
                    alt="checkout image" />
                <div className="checkout__title">
                    <h3>
                        <small>Hello </small> <strong className="helloUser"> {user ? user?.email : "Guest"} </strong>
                    </h3>
                    <h2>
                        your shopping basket
                    </h2>
                    {basket.map(item => {
                        return (<CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />)
                    })}

                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </CheckoutWrapper>
    )
}

export default Checkout

const CheckoutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    height: max-content;
    
.checkout__left{
    display: flex;
    flex-direction:column;
    background-color: white;
    padding: 20px;
    height: max-content;

}

.checkout__ad{
    width: 70vmax;
    height: 90px;
    margin-top: 39px;
    margin-bottom: 10px;
}
.checkout__title{
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
    text-transform: capitalize;

    
}
.checkout__right{
   margin-top: 39px;
   text-transform: capitalize;
    
}
.helloUser{
   text-transform: lowercase;
    
}


`