"use strict";

var canvas = document.getElementById('canvas1');
var modal = document.getElementById("modal");
var start = document.getElementById("start");
var text = document.getElementById("text");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var score = 0;
ctx.font = '50px Cinzel, serif';
var keys = [];
var bgd = new Image();
bgd.src = './images/backgd.png'; //taille du personnage

var player = {
  x: canvas.width / 2,
  y: 700,
  width: 48,
  //168/4 taille de la spritesheet pour localiser le perso
  height: 64,
  //256/4
  frameX: 3,
  frameY: 3,
  speed: 9,
  moving: false
}; //image du personnage

var playerSprite = new Image();
playerSprite.src = './images/ryuk.png';
start.addEventListener("click", function () {
  modal.style.display = "none";
  init();
  animate();
});

function init() {
  for (var i = 0; i < numberOfFruits; i++) {
    fruitsArray.push(new Fruits());
  }
} // init();


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.drawImage(bgd, 0, 0, canvas.width, canvas.height); //  ctx.fillRect(10, canvas.height -90, 50, 50);

  drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * 3, player.height * 3);
  movePlayer(); // for (let i = 0; i < fruitsArray.length; i++) {
  //     fruitsArray[i].draw();
  //     fruitsArray[i].update();
  //     // console.log(fruitsArray[i].distance);
  //     // console.log(player.x);
  // }

  collisions();
  handleFruits();
  requestAnimationFrame(animate);
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + score, 10, 50);
  endGame();
} // animate();


window.addEventListener('keydown', function (e) {
  keys[e.key] = true;
  console.log(keys);
});
window.addEventListener('keyup', function (e) {
  delete keys[e.key];
}); //fonction pour bouger le personnage 

function movePlayer() {
  if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
    player.x += player.speed;
  } else if (keys['ArrowLeft'] && player.x > 0) {
    player.x -= player.speed;
  }

  ;
}

;
var bang = new Image();
bang.src = './images/bang.png'; //fonction collision entre le personnage et les fruits

function collisions() {
  for (var i = 0; i < fruitsArray.length; i++) {
    if (fruitsArray[i].x < player.x + player.width && fruitsArray[i].x + fruitsArray[i].size > player.x && fruitsArray[i].y < player.y + player.height && fruitsArray[i].size + fruitsArray[i].y > player.y) {
      ctx.drawImage(bang, player.x, player.y, 150, 150);
      fruitsArray.splice(i, 1);
      i--;
      fruitsArray.push(new Fruits());
      score++;
      return true;
    }

    console.log('collision');
  }
}

function endGame() {
  if (score == 5) {
    score = "super tu as réussi à attraper 20 fruits!!";
    setTimeout(function () {
      location.reload();
    }, 2000);
  }

  ;
} //Condition detection collision 
// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}
// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.height + rect1.y > rect2.y) {
//     // collision détectée !
// }