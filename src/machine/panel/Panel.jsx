import React from "react";
import styled from "styled-components";
import MoneyInput from "./MoneyInput.jsx";
import Display from "./DisplayContainer.jsx";
import Keyboard from "./KeyboardContainer.jsx";
import FlexCenteredColumnContainer from "../../display-containers/FlexCenteredColumnContainer";

const StyledPanel = styled(FlexCenteredColumnContainer)`
    border: 3px solid black;
    height: 420px;
    width: 120px;
    background: #d3d3d3;
`;

const Panel = () => (
    <StyledPanel>
        <MoneyInput type="coin" />
        <MoneyInput type="bill" />
        <Display />
        <Keyboard />
    </StyledPanel>
);

export default Panel;
