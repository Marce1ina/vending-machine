export const INSERT_MONEY = "INSERT_MONEY";
export const TYPE_NUMBER = "TYPE_NUMBER";

export function insertMoney(valueIndex) {
    return {
        type: INSERT_MONEY,
        valueIndex
    };
}

export function typeNumber(number) {
    return {
        type: TYPE_NUMBER,
        number
    };
}
