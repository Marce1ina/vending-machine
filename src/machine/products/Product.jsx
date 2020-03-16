import React from "react";
import styled from "styled-components";
import FlexCenteredColumnContainer from "../../display-containers/FlexCenteredColumnContainer";
import FlexCenteredContainer from "../../display-containers/FlexCenteredContainer";

const StyledProduct = styled(FlexCenteredColumnContainer)`
    border: 2px solid black;
    height: 38px;
    width: 45px;
    background: #c9f8fe;
    font-size: 16px;
    font-weight: 600;
`;

const Container = styled(FlexCenteredContainer)`
    height: 10px;
    width: 100%;
    background: grey;
    font-size: 12px;
    font-weight: 400;
    color: white;
`;

const Product = ({ id, price }) => (
    <StyledProduct {...{ id }}>
        {id}
        <Container>{price} PLN</Container>
    </StyledProduct>
);

export default Product;
