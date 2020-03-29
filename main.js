var green = new Audio('green.mp3');
var yellow = new Audio('yellow.mp3');
var red = new Audio('red.mp3');
red.volume = 1
yellow.volume = 0.8
green.volume = 0.5
console.log(green.volume,yellow.volume,red.volume)

function changeColour(button){
    style = window.getComputedStyle(button)
    colour = style.getPropertyValue('background-color')
    document.body.style.backgroundColor = colour
    if(button.classList.contains('green')){
        green.play()
    } else if(button.classList.contains('yellow')){
        yellow.play()
    } else if(button.classList.contains('red')){
        red.play()
    }
}