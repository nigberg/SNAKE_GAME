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
    x:100,
    y: 100
};
