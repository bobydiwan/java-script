
let divv = document.querySelector("div");//select the first div|| this div is selected from the html page not created
let baseurl = "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i < 20; i++) {
    const imgg = document.createElement("img");//will create img element

    const num = document.createElement("span");//will create img element
    const dv = document.createElement("div");
    num.innerText = i;

    imgg.src = `${baseurl}${i}.png`;//add img source to imgg element

    imgg.classList.add("class1");//css js property applycss in js 
    //num.classList.add("class2");
    dv.appendChild(imgg);
    dv.appendChild(num);//adding js elements to html page
    divv.appendChild(dv);
}