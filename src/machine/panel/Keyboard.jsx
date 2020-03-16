import React from "react";
import styled from "styled-components";
import FlexCenteredContainer from "../../display-containers/FlexCenteredContainer";
import FlexCenteredColumnContainer from "../../display-containers/FlexCenteredColumnContainer";

const StyledKey = styled(FlexCenteredContainer)`
    width: 20px;
    height: 30px;
    padding: 2px;

    &:hover {
        cursor: pointer;
        background: #ebebb9;
    }

    &:active {
        background: #d7d773;
    }

    & + & {
        border-left: 1px solid black;
    }
`;
const StyledKeysRow = styled(FlexCenteredContainer)`
    & + & {
        border-top: 1px solid black;
    }
`;
const StyledKeyboard = styled(FlexCenteredColumnContainer)`
    padding: 2px;
    border: 2px solid black;
    background: #fffec0;
`;

const Keyboard = ({ typeNumber }) => (
    <StyledKeyboard>
        {[0, 3, 6].map(rowValue => (
            <StyledKeysRow key={rowValue}>
                {[1, 2, 3].map(keyValue => {
                    const key = keyValue + rowValue;
                    return (
                        <StyledKey {...{ key }} onClick={() => typeNumber(key)}>
                            {key}
                        </StyledKey>
                    );
                })}
            </StyledKeysRow>
        ))}
    </StyledKeyboard>
);

export default Keyboard;
