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
        } else if (buttonText === 'X') {
            displayValue += '*';
        } else if (buttonText === 'C' || buttonText === 'CE') {
            display.innerHTML = " ";
            displayValue = " ";
        } else {
            displayValue += e.target.innerText;
        }
    });
}