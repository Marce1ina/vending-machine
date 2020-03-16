import { INSERT_MONEY, TYPE_NUMBER } from "./actions";

const initialState = {
    credit: 0,
    availableValues: [1, 2, 5, 10, 20],
    choosenNumber: undefined
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

        case TYPE_NUMBER:
            return {
                ...state,
                choosenNumber:
                    state.choosenNumber === undefined
                        ? action.number
                        : `${state.choosenNumber}`.length === 1
                        ? parseInt(`${state.choosenNumber}${action.number}`)
                        : undefined
            };
        default:
            return state;
    }
}
