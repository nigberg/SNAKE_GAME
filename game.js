// canvas set
const canvas = document.getElementById("gamefield");
const ctx = canvas.getContext("2d");
const newGameButton = document.querySelector("#new-game-button");

// game objects set
const snake = {
    initialize(){
    this.x = 10;
    this.y = 10;
    this.dx = 10;
    this.dy = 0;
    this.cells = [];
    }
};
const apple = {
    x: 100,
    y: 100
};

snake.initialize();
const intervalId = setInterval(gameLoop, 100);

function gameLoop(){
    // snake position update
    snake.x += snake.dx;
    snake.y += snake.dy;

    // check if the snake hits the wall and end the game
    if (snake.x < 0 || snake.x -10 > canvas.width || snake.y < 0 || snake.y > canvas.height -10){
        clearInterval(intervalId);
        if(confirm("Game over! You're lost! Do you want to start a new game?")){
            location.reload();
        };        
    }

    // check if the snale ate the apple
    if (snake.x === apple.x && snake.y === apple.y) {

        // Add a new cell to the snake
        snake.cells.push({ x: snake.x, y: snake.y });
    
        // Move the apple to a new location
        apple.x = Math.floor(Math.random() * canvas.width / 10) * 10;
        apple.y = Math.floor(Math.random() * canvas.height / 10) * 10;
      }
      // Update the snake's cells
  snake.cells.unshift({ x: snake.x, y: snake.y });
  if (snake.cells.length > 5) {
    snake.cells.pop();
  }

  // Draw the game objects
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, 10, 10);
  ctx.fillStyle = "green";
  snake.cells.forEach(function(cell, index) {
  ctx.fillRect(cell.x, cell.y, 10, 10);

    // Check if the snake has hit itself
    if (cell.x === snake.x && cell.y === snake.y && index > 4) {
      // End the game
      clearInterval(intervalId);
      if(confirm("Game over! You're lost! Do you want to start a new game?")){
        location.reload();
    };
    }
  });
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

newGameButton.addEventListener("click", () => {
    location.reload();
})