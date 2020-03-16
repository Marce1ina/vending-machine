import React from "react";
import styled from "styled-components";
import FlexCenteredContainer from "../../display-containers/FlexCenteredContainer";

const StyledDisplay = styled(FlexCenteredContainer)`
    border: 3px solid black;
    height: 40px;
    width: 70px;
    font-size: 12px;
    background: #d7fdd8;
`;

const Display = ({ text }) => <StyledDisplay>{text}</StyledDisplay>;

export default Display;
