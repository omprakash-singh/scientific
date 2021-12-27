const menuclose = document.querySelector(".menu");
const trigoTable = document.querySelector(".trigoTable");
const trigoButton = document.getElementById("trigoFunction");
const display = document.querySelector(".display");
const button = document.querySelectorAll("th");

trigoButton.addEventListener('click', () => {
    trigoTable.classList.toggle("showTable");
    console.log("click");
});

let menubar = () => {
    menuclose.classList.toggle("open");
};


let displayValue = ' ';

for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        display.innerHTML += buttonText;
        if (buttonText === '=') {
            display.innerHTML = eval(displayValue);
        } else if (buttonText === 'x²') {
            displayValue = Math.pow(displayValue, 2);
            display.innerHTML = displayValue;
        } else if (buttonText === '1/x') {
            displayValue = 1 / displayValue.charAt(displayValue.length - 1);
            display.innerHTML = displayValue;
        } else if (buttonText === '|x|') {
            displayValue = Math.abs(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'exp') {
            displayValue = Math.exp(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'mod') {
            displayValue += '%';
        } else if (buttonText === '√x') {
            displayValue = Math.sqrt(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'n!') {
            let fact = 1;
            for (let i = 2; i <= displayValue; i++) {
                fact *= i;
            }
            displayValue = fact;
            display.innerHTML = displayValue;
        } else if (buttonText === '÷') {
            displayValue += '/';
        } else if (buttonText === 'y^x') {

        } else if (buttonText === '×') {
            displayValue += '*';
        } else if (buttonText === '10^x') {
            displayValue = Math.pow(10, displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'log') {
            displayValue = Math.log(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'ln') {

        } else if (buttonText === 'sin') {
            displayValue = Math.sin(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'cos') {
            displayValue = Math.cos(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'tan') {
            displayValue = Math.tan(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'sec') {
            displayValue = 1 / Math.cos(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'csc') {
            displayValue = 1 / Math.sin(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'cot') {
            displayValue = 1 / Math.tan(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === 'C') {
            displayValue = " ";
            display.innerHTML = " ";
        } else if (buttonText === '⌫') {
            displayValue = displayValue.replace(displayValue.charAt(displayValue.length - 1), " ");
            display.innerHTML = displayValue;
        } else {
            displayValue += e.target.innerText;
        }
    });
}