import React from "react";
import Money from "./Money.jsx";
import { Draggable, Droppable } from "react-beautiful-dnd";
import FlexCenteredColumnContainer from "../display-containers/FlexCenteredColumnContainer";

const computeType = value => {
    return value > 5 ? "bill" : "coin";
};

const MoneyList = ({ availableValues }) => (
    <Droppable droppableId="money-initial">
        {provided => (
            <FlexCenteredColumnContainer ref={provided.innerRef} {...provided.droppableProps}>
                {availableValues.map((value, index) => {
                    const type = computeType(value);

                    return (
                        <Draggable key={value} index={index} draggableId={type + index}>
                            {provided => <Money {...{ value, provided, type }} />}
                        </Draggable>
                    );
                })}
                {provided.placeholder}
            </FlexCenteredColumnContainer>
        )}
    </Droppable>
);

export default MoneyList;
