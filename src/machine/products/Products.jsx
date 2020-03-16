import React from "react";
import styled from "styled-components";
import Shelf from "./Shelf.jsx";
import FlexCenteredColumnContainer from "../../display-containers/FlexCenteredColumnContainer";

const StyledProducts = styled(FlexCenteredColumnContainer)`
    border: 3px solid black;
    height: 320px;
    width: 220px;
    background: #fff;
`;

const Products = () => (
    <StyledProducts>
        {[1, 2, 3, 4, 5].map(shelfNumber => (
            <Shelf key={shelfNumber} {...{ shelfNumber }} />
        ))}
    </StyledProducts>
);

export default Products;
