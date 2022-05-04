let balloon = document.querySelector('#balloon')
let style = window.getComputedStyle(balloon, null).getPropertyValue('font-size')
let currentSize = parseFloat(style)

function balloonExpander() {
    //let size = 10 +"px"
    console.log(balloon.style.fontSize)
    window.addEventListener("keydown", function(event){
        const key = event.key
        switch (key) {
            case "ArrowUp":
                increaser();
                break;
            case "ArrowDown":
                decreaser();
                break;
        }
    })
    //console.log(size)
}

function increaser(){
    if (currentSize < 200) {
    balloon.style.fontSize = (currentSize++) + 'px'

    console.log(currentSize)
    }
    else {
        document.querySelector('#balloon').innerHTML = '&#128165'
    }
}

function decreaser() {
    if (currentSize < 200) {
        balloon.style.fontSize = (currentSize--) + 'px'
        console.log(currentSize)
    }
}
balloonExpander()