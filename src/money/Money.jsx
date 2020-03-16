import React from "react";
import styled from "styled-components";

const StyledMoney = styled.div`
    border: 3px solid black;
    border-radius: ${props => (props.type === "bill" ? 0 : "50%")};
    height: 40px;
    width: ${props => (props.type === "bill" ? "70px" : "40px")};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => {
        switch (props.value) {
            case 1:
                return "#D3D3D3";
            case 2:
                return "#FFFEC0";
            case 5:
                return "#C0C0C0";
            case 10:
                return "#ffe8be";
            case 20:
                return "#e8e7ff";
            default:
                return "#C0C0C0";
        }
    }};
`;

const Money = ({ value, provided, type }) => (
    <StyledMoney
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        {...{ type, value }}
    >
        {value}
    </StyledMoney>
);

export default Money;
