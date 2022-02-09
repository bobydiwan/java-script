
let divv = document.querySelector("div");//select the first div
let baseurl = "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i < 100; i++) {
    const imgg = document.createElement("img");//will create img element
    imgg.src = `${baseurl}${i}.png`;//add img source to imgg element
    divv.appendChild(imgg);//now add it to the html page
}