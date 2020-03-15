import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const StyledMoneyInput = styled.div`
    border: 3px solid
        ${({ snapshot, type }) =>
            snapshot.isDraggingOver && snapshot.draggingOverWith.startsWith(type) ? "#008000" : "black"};
    width: ${({ type }) => {
        return type === "coin" ? "40px" : "70px";
    }};
    border-radius: ${({ type }) => (type === "coin" ? "50%" : "0")};
    height: 40px;
    background: #333;
    box-sizing: initial;
`;

const MoneyInput = ({ type }) => (
    <Droppable droppableId={`${type}-insert`}>
        {(provided, snapshot) => (
            <StyledMoneyInput ref={provided.innerRef} {...{ type, snapshot, ...provided.droppableProps }} />
        )}
    </Droppable>
);

export default MoneyInput;
