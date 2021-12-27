const menuclose = document.querySelector(".menu");
const trigoTable = document.querySelector(".trigoTable");
const trigoButton = document.getElementById("trigoFunction");
const display = document.querySelector(".display");
const button = document.querySelectorAll("th");


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
        } else if (buttonText === '×') {
            displayValue += '*';
        } else if (buttonText === 'C' || buttonText === 'CE') {
            display.innerHTML = " ";
            displayValue = " ";
        } else if (buttonText === '÷') {
            displayValue += "/";
        } else if (buttonText === "√x") {
            displayValue = Math.sqrt(displayValue);
            display.innerHTML = displayValue;
        } else if (buttonText === "x²") {
            displayValue = Math.pow(displayValue, 2);
            display.innerHTML = displayValue;
        } else if (buttonText === "⌫") {
            displayValue = displayValue.replace(displayValue.charAt(displayValue.length - 1), " ");
            display.innerHTML = displayValue;
        } else if (buttonText === "1/x") {
            displayValue = 1 / displayValue.charAt(displayValue.length - 1);
            display.innerHTML = displayValue;
        } else {
            displayValue += e.target.innerText;
        }
    });
}