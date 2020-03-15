import { INSERT_MONEY } from "./actions";

const initialState = {
    credit: 0,
    availableValues: [1, 2, 5, 10, 20]
};

export default function vendingMachineApp(state = initialState, action) {
    switch (action.type) {
        case INSERT_MONEY:
            const { availableValues, credit } = state;
            const { valueIndex } = action;

            return {
                ...state,
                availableValues: [
                    ...availableValues.slice(0, valueIndex),
                    ...availableValues.slice(valueIndex + 1, availableValues.length)
                ],
                credit: credit + availableValues[valueIndex]
            };
        default:
            return state;
    }
}
