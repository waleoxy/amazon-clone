import React, { useState } from 'react';
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/reducer';

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <SubTotalWrapper>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={
                        (value) => (
                            <>
                                <p>
                                    Subtotal = ({basket?.length}: items) <strong>{value}</strong>
                                </p>
                                <small className="subtotal__gift">
                                    <input type="checkbox" />
                                This order contains a gift
                            </small>
                            </>
                        )
                    }
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

                <button >Proceed to checkout</button>


            </div>
        </SubTotalWrapper>
    )
}

export default SubTotal

const SubTotalWrapper = styled.div`

.subtotal{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1 solid #dddddd;
    border-radius: 2px; 
}

.subtotal__gift{
    display: flex;
    align-items: center;
}

.subtotal__gift > input{
   margin-right: 5px;
}
.subtotal > button{
   background: var(--amazonYellow);
   border-radius: 2px;
   width: 100%;
   height: 30px;
   border: 1px solid;
   margin-top: 19px;
   border-color: #a88734 #9c7e31 #846a29;
   color: #111111;

}

`
