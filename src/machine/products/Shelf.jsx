import React from "react";
import styled from "styled-components";
import Product from "./Product.jsx";
import FlexCenteredContainer from "../../display-containers/FlexCenteredContainer";

const StyledShelf = styled(FlexCenteredContainer)`
    border-bottom: 4px solid black;
    border-radius: 3px;
    width: 180px;
    padding-bottom: 3px;
`;

const Shelf = ({ shelfNumber }) => (
    <StyledShelf>
        {[1, 2, 3].map(productNumber => {
            const productPrice = Math.round(Math.random() * 100) / 10;

            return <Product key={productNumber} id={`${shelfNumber}${productNumber}`} price={productPrice} />;
        })}
    </StyledShelf>
);

export default Shelf;
