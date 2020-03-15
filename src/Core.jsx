import React from "react";
import styled from "styled-components";
import MoneyList from "./money/MoneyListContainer.jsx";
import VendingMachine from "./machine/VendingMachine.jsx";
import { DragDropContext } from "react-beautiful-dnd";
import flipCoinSound from "./assets/cash_register_2.mp3";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

class Core extends React.Component {
    onDragEnd = result => {
        if (result.destination) {
            const { droppableId } = result.destination;
            const { draggableId } = result;
            const isCoin = draggableId.startsWith("coin");
            const isBill = draggableId.startsWith("bill");

            const insertMoney = () => this.props.insertMoney(result.source.index);

            if (droppableId === "coin-insert" && isCoin) {
                const audio = new Audio(flipCoinSound);
                audio.play();
                insertMoney();
            }

            if (droppableId === "bill-insert" && isBill) {
                const audio = new Audio(flipCoinSound);
                audio.play();
                insertMoney();
            }
        }
    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <StyledContainer>
                    <VendingMachine />
                    <MoneyList />
                </StyledContainer>
            </DragDropContext>
        );
    }
}

export default Core;
