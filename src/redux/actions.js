export const INSERT_MONEY = "UPDATE_CREDIT";

export function insertMoney(valueIndex) {
    return {
        type: INSERT_MONEY,
        valueIndex
    };
}
