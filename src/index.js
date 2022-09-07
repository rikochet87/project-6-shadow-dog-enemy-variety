/**@type {HTMLCanvasElement}*/
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 800;

  class Game {
    constructor(ctx, width, height) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.enemies = [];
      this.#addNewEnemy();
      console.log(this.enemies);
    }
    update() {
      this.enemies.forEach(object => object.update())
    }
    draw() {
      this,this.enemies.forEach(object => object.draw())
    }
    #addNewEnemy() {
      this.enemies.push(new Enemy())
    }
  }

  class Enemy {
    constructor() {
      this.x = 100;
      this.y = 100;
      this.width = 100;
      this.width = 100;
    }
    update() {
      this.x --;
    }
    draw() {
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  const game = new Game(ctx, canvas.width, canvas.height)
  let lastTime = 1;

  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update();
    game.draw();
    //some code
    requestAnimationFrame(animate);
  };
  animate(0);
});
