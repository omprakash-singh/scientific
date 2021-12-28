const menuclose = document.querySelector(".menu");
const from = document.getElementById("from");
const to = document.getElementById("to");
const cal = document.getElementById("calculate");
const result = document.getElementById("result");

let menubar = () => {
    menuclose.classList.toggle("open");
};

cal.addEventListener('click', () => {

    if (from.value === null) {
        result.innerHTML = "No value";
    }
    result.innerHTML = from.value;

});