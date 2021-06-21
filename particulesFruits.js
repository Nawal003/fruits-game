const numberOfFruits = 10;
let fruitsArray = [];

const fruits = new Image();
fruits.src = './images/fruits2.png';

class Fruits {
    constructor() {
        this.x = canvas.width + Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * canvas.height;
        // this.number = Math.random() * 1;
        this.size = Math.random() * 40 + 60;
        this.speed = Math.random() * 2 + 1;
        this.frameX = Math.floor(Math.random() * 3);
        this.frameY = Math.floor(Math.random() * 3);
        this.spriteSize = 414 / 3;


    }
    draw() {
        // ctx.fillRect(this.x, 0, this.width, this.top);
        // ctx.fillRect(this.x, 0, canvas.height - this.bottom, this.width, this.bottom);
        //method pour dessiner les fruits , 9 arguments, s = src; (fruits, sx, sy, sw, sw, dx, dy, dw, dh)
        ctx.drawImage(fruits, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.x, this.y, this.size, this.size);

    }
    update() {


        if (this.y > canvas.height) {
            this.y = 10 - this.size;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 80 + 80;
            this.speed = Math.random() * 5 + 2;


        }
        this.y += this.speed;

    }

}


// fonction qui dessine 

function handleFruits() {
    for (let i = 0; i < fruitsArray.length; i++) {
        fruitsArray[i].update();
        fruitsArray[i].draw();
    }
}