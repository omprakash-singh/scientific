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