const form = document.querySelector('form');
const input = document.querySelector("#product")
const list = document.querySelector("#list")
const input1 = document.querySelector("#qty")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pname = input.value + input1.value;
    const newli = document.createElement("LI");
    newli.innerText = pname;
    list.appendChild(newli);

})