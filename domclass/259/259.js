const button = document.querySelector('button')
button.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const new1 = `rgb(${r}, ${g}, ${b})`;
    // const new1 = 'olive';//variable new1 should not bein quotes but olive is color should be in quotes 
    document.body.style.backgroundColor = new1;
})

