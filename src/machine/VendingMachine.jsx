import React from "react";
import styled from "styled-components";
import Products from "./products/Products.jsx";
import Drawer from "./Drawer.jsx";
import Panel from "./panel/Panel.jsx";
import FlexCenteredColumnContainer from "../display-containers/FlexCenteredColumnContainer";
import FlexCenteredContainer from "../display-containers/FlexCenteredContainer";

const StyledVendingMachine = styled(FlexCenteredContainer)`
    height: 460px;
    width: 400px;
    border: solid black 5px;
    border-radius: 3px;
    margin-right: 50px;
    background: #a9a9a9;
`;

const ItemsContainer = styled(FlexCenteredColumnContainer)`
    height: 100%;
`;

class VendingMachine extends React.Component {
    render() {
        return (
            <StyledVendingMachine>
                <ItemsContainer>
                    <Products />
                    <Drawer />
                </ItemsContainer>
                <Panel />
            </StyledVendingMachine>
        );
    }
}

export default VendingMachine;
