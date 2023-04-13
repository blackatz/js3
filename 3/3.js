// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const number1 = prompt("Введите 1 число");
const number2 = prompt("Введите 2 число");
const number3 = prompt("Введите 3 число");

function max(a, b, c) {
    let maxnum = a;
    if (b > maxnum) {
        maxnum = b;
    }
    if (c > maxnum) {
        maxnum = c;
    }
    console.log(`Максимальное значение равно ${maxnum}`);
}

max(number1, number2, number3);