import React from "react";
import styled from "styled-components";
import MoneyInput from "./MoneyInput.jsx";
import CreditDisplay from "./CreditDisplayContainer.jsx";
import FlexCenteredColumnContainer from "../../display-containers/FlexCenteredColumnContainer";

const StyledPanel = styled(FlexCenteredColumnContainer)`
    border: 3px solid black;
    height: 390px;
    width: 120px;
    background: #d3d3d3;
`;

const Panel = () => (
    <StyledPanel>
        <MoneyInput type="coin" />
        <MoneyInput type="bill" />
        <CreditDisplay />
    </StyledPanel>
);

export default Panel;
