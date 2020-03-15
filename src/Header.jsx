import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    height: 200px;
    font-size: 30px;
`;

const StyledTop = styled.div`
    background-color: pink;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
`;
const StyledBottom = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`;

const Header = () => (
    <StyledHeader>
        <StyledTop>VENDING</StyledTop>
        <StyledBottom>MACHINE</StyledBottom>
    </StyledHeader>
);

export default Header;
