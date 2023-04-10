// canvas set
const canvas = document.getElementById("gamefield");
const ctx = canvas.getContext("2d");

// game objects set
const snake = {
    x: 10,
    y: 10,
    dx: 10,
    dy: 0,
    cells: []
};
const apple = {
    x: 100,
    y: 100
};

const intervalId = setInterval(gameLoop, 100);

function gameLoop(){

}

// set listener for arrow buttons
document.addEventListener("keydown", (evt) => {
    if(evt.keyCode === 37 && snake.dx !== 10){ //left
        snake.dx = -10;
        snake.dy = 0;
    }
    if(evt.keyCode === 38 && snake.dy !== 10){ //up
        snake.dx = 0;
        snake.dy = -10;
    }
    if(evt.keyCode === 39 && snake.dx !== -10){ //right
        snake.dx = 10;
        snake.dy = 0;
    }
    if(evt.keyCode === 40 && snake.dy !== -10){ //down
        snake.dx = 0;
        snake.dy = 10;
    }

});