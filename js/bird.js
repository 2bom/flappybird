/**
 * Created by diana on 16. 12. 5.
 */
const Bird = function(x, y, ctx) {
  var bird = this;
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.velY = 0;
  this.width = 100;
  this.height = 100;
  this.ticks = 0;
  this.spriteIndex = 0;
  this.sprites = [document.getElementById('bird')];
  
  document.addEventListener('keydown', function(e){
    if (e.keyCode == 32){
      bird.velY = -7;
      console.log("spacebar");
    }
  });
};
Bird.prototype.update = function(){
  this.ticks++;
  if (this.ticks % 15 === 0){
    this.spriteIndex = (this.spriteIndex+1) % this.sprites.length;
  }
  this.y += this.velY;
  this.velY += 0.5;
};
Bird.prototype.render = function(){
  var renderX = this.x - this.width/2;
  var renderY = this.y - this.height/2;
  this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
};