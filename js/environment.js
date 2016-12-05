/**
 * Created by diana on 16. 12. 5.
 */
const Environment = function(c, ctx){
  this.c = c;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 1;
  this.bgWidth = 320;
  this.bgImg = document.getElementById("bg");
};
Environment.prototype.update = function() {
  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth){
    this.bgPos = 0;
  }
};
Environment.prototype.render = function(){
  for(var i = 0; i <=  this.c.width/this.bgWidth+1; ++i){
    this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth, 0);
  }
};