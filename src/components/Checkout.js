import React from 'react';
import styled from "styled-components";
import SubTotal from "./SubTotal";

function Checkout() {
    return (
        <CheckoutWrapper>
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnr55aoobmD9-1uEu0YPIuQty2fwzvOiVgjA&usqp=CAU"
                    alt="checkout image" />
                <div className="checkout__title">
                    <h2 className="checkout__title">
                        your shopping basket
                        {/*basketitem*/}
                        {/*basketitem*/}
                        {/*basketitem*/}
                        {/*basketitem*/}
                    </h2>
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
    background-color: white;
    padding: 20px;
    height: max-content;
    
.checkout__ad{
    width: 100%;
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
`