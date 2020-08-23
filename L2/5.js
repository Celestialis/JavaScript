'use strict';
/**
 * Функция складывает параметр "а" с параметром "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}
/**
 * Функция из параметра "а" вычитает параметр "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function difference(a, b) {
    return a - b;
}
/**
 * Функция делит параметр "a" на параметр "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function quotient(a, b) {
    return a / b;
}
/**
 * Функция умножает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function productOfNumber(a, b) {
    return a * b;
}

/**
 * Функция получает два числа и осуществляет над ними математическу операцию.
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation может быть "+", "-", "/", "*".
 * @throws {Error} если передана непредусмотренная операция, то будет выброшена ошибка.
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    case "+":
        return addition(arg1, arg2);
    case "-":
        return difference(arg1, arg2);
    case "/":
        return quotient(arg1, arg2);
    case "*":
        return productOfNumber(arg1, arg2);
    default:
        throw new Error("Операция " + operation + " не предусмотрена");
    }
}
alert(mathOperation(6, 9, "+"));
alert(mathOperation(6, 9, "-"));
alert(mathOperation(6, 9, "/"));
alert(mathOperation(6, 9, "*"));
alert(mathOperation(6, 9, "error"));