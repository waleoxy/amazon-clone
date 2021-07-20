import React from 'react';
import styled from "styled-components";
import SubTotal from "./SubTotal";

function Checkout() {
    return (
        <CheckoutWrapper>
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1VXUymojlDFIHU9I5y45_fcWiuJSRNG1P8xoa6cfBTQK1Cxn_aUyTibYKxyZSuFUFg&usqp=CAU"
                    alt="checkout image" />
                <div className="checkout__title">
                    <h2>
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
    align-items: center;
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

`