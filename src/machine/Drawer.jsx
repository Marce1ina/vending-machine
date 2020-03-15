import React from "react";
import styled from "styled-components";

const StyledDrawer = styled.div`
    border: 3px solid black;
    height: 80px;
    width: 180px;
    position: relative;
    background: #d3d3d3;
`;

const Drawer = () => <StyledDrawer />;

export default Drawer;
