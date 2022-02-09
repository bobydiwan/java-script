const form = document.querySelector("#shelterform")
const input = document.querySelector("#catname")
const list = document.querySelector("#cats")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catname = input.value;
    const newli = document.createElement("LI");
    newli.innerText = catname;
    list.append(newli)
});