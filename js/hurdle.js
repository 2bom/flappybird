/**
 * Created by diana on 16. 12. 5.
 */
const Hurdle = function(x, y, length, speed, ctx){
  this.x = x;
  this.y = y;
  this.length = length;
  this.ctx = ctx;
  this.speed = speed;
};

Hurdle.prototype.update = function(){
  this.x -= this.speed;
};
Hurdle.prototype.render = function(){
  this.ctx.save();
  this.ctx.fillStyle = "#000000";
  this.ctx.fillRect(this.x, this.y, 150, this.length);
  this.ctx.fillStyle = "#74BF2E";
  this.ctx.fillRect(this.x+5, this.y+5, 140, this.length-10);
  this.ctx.restore();
};

