import React from "react";
import styled from "styled-components";
import FlexCenteredContainer from "../../display-containers/FlexCenteredContainer";

const StyledCreditDisplay = styled(FlexCenteredContainer)`
    border: 3px solid black;
    height: 40px;
    width: 70px;
    font-size: 12px;
    background: #008000;
`;

const CreditDisplay = ({ credit }) => <StyledCreditDisplay>Credit: {credit}</StyledCreditDisplay>;

export default CreditDisplay;
