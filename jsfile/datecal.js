const menuclose = document.querySelector(".menu");
const from = document.getElementById("from");
const to = document.getElementById("to");
const cal = document.getElementById("calculate");
const result = document.getElementById("result");

let menubar = () => {
    menuclose.classList.toggle("open");
};

cal.addEventListener('click', () => {
    if (from.value === "") {
        alert("Enter valid from date");
    } else if (to.value === "") {
        alert("Enter valid to date");
    }
    result.innerHTML = "from date is " + from.value + "<br> to date is " + to.value;
});