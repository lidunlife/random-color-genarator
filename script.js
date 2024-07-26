const colorBtn = document.getElementById("colorBtn")
const container = document.getElementById("container")




function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorBtn.addEventListener('click', function() {
    const newColor = getRandomColor();
    container.style.backgroundColor = newColor;
    document.getElementById('colorDisplay').textContent = 'Текущий цвет: ' + newColor;
});
