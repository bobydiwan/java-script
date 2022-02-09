const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const span = document.querySelectorAll("span");//returns array

for (var i = 0; i < 7; i++) {
    span[i].style.color = colors[i];
}