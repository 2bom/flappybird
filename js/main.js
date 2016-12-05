/**
 * Created by diana on 16. 12. 5.
 */
window.onload= function (){
  const c = document.getElementById('canvas');
  c.width = window.innerWidth;
  c.height = 600;
  
  const ctx = c.getContext('2d');
  
  const environment = new Environment(c, ctx);
  const bird = new Bird(100, 470, ctx);
  const hurdles = [];
  setInterval(function(){
    var hurdleSet = generateRandomHurdles(ctx, c.width, c.height);
    hurdles.push(hurdleSet.top, hurdleSet.bottom);
  }, 3000);
  gameLoop();
  
  
  /*
  * MAIN GAME LOOP */
  function gameLoop() {
    ctx.fillRect(0,0,c.width,c.height);
    environment.update();
    environment.render();
    hurdles.forEach(function(hurdle){
      hurdle.update();
      hurdle.render();
    });
    
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop);
  }
};

function generateRandomHurdles(ctx, canvasWidth, canvasHeight) {
  var lengthTop = Math.round(Math.random()*200 + 100);
  var lengthBottom = canvasHeight - 200 - lengthTop;
  var returnVal = {};
  returnVal.top = new Hurdle(canvasWidth, -5, lengthTop, 3, ctx);
  returnVal.bottom = new Hurdle(canvasWidth, canvasHeight+5-lengthBottom, lengthBottom, 3, ctx);
  return returnVal;
}