

const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        let new1 = `rgb(${r}, ${g}, ${b})`;
        button.style.backgroundColor = new1;
    })
}