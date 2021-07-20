import React from 'react';
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            >

            </CurrencyFormat>
        </div>
    )
}

export default SubTotal

const SubTotalWrapper = styled.div`



`
