btnLeft = document.getElementById("btnLeft");
btnRight = document.getElementById("btnRight");
btnUp = document.getElementById("btnUp");
btnDown = document.getElementById("btnDown");
btnStop = document.getElementById("btnStop");
console.log("hi");
/* class Snake {
    constructor() {
        this.snakeBody = [
            [3,1],
            [3,2],
            [3,3],
            [3,4],
        ]
    }
}
const drawCanvas = () => {
    const grid = [];
    for (let i = 0; i < 10 ; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            row.push(' ');
        }
        grid.push(row);
    }
    grid.forEach(row => console.log(row.join("|")))
}

const game = new Snake();
game.drawCanvas() */

var snake;
function test() {
  console.log("hey");
}

function startGame() {
  gameArea.start();
  snake = new component(100, 100, "red", 0, 0);

  food = new component(100,100, "green", 100,100)
}

let gameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 1000;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};
function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function moveRight() {
  snake.speedX += 10;
  snake.speedY = 0;
  btnLeft.disabled = true;

  btnUp.disabled = false;
  btnDown.disabled = false;
}
function moveLeft() {
  snake.speedX -= 10;
  snake.speedY = 0;
  btnRight.disabled = true;

  btnUp.disabled = false;
  btnDown.disabled = false;
}
function moveUp() {
  snake.speedY -= 10;
  snake.speedX = 0;
  btnDown.disabled = true;

  btnLeft.disabled = false;
  btnRight.disabled = false;
}

function moveDown() {
  snake.speedY += 10;
  snake.speedX = 0;
  btnUp.disabled = true;

  btnLeft.disabled = false;
  btnRight.disabled = false;
  
}
function stopMove() {
  snake.speedX = 0;
  snake.speedY = 0;
  btnUp.disabled = false;
  btnDown.disabled = false;
  btnLeft.disabled = false;
  btnRight.disabled = false;
}

function updateGameArea() {
  gameArea.clear();
  snake.newPos();
  snake.update();
  food.update();
}
