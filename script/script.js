window.onload=()=> {
  var canvas = document.getElementById('sketch');
  var ctx = canvas.getContext('2d');
  var width = canvas.width=window.innerWidth;
  var height  = canvas.height=window.innerHeight;
  ctx.fillStyle='#000';
  ctx.fillRect(0,0,width,height);
  var easing=0.5;
  var x=50;
  var p = new Ball();
  var u = new User();
  var c = new Com();

  function Ball(){
    this.x=width/2;
    this.y=height/2;
    this.vx=10;
    this.vy=10;
    this.side=20;
  }

  Ball.prototype.update = function () {
    this.x+=this.vx;
    this.y+=this.vy;
    if(this.x>=width-10){
      this.vx*=-1;
    }
    else if (this.x<=10) {
      this.vx*=-1;
    }
    else if (this.y>=height-10) {
      this.vy*=-1;
    }
    else if (this.y<=10) {
      this.vy*=-1;
    }
  };

  Ball.prototype.draw = function () {
    ctx.fillStyle='#fff';
    ctx.fillRect(this.x-10,this.y-10,20,20);
  };

  function User(){
    this.x=0;
    this.y=height/2;
  }

  User.prototype.update = function (keycodenumber) {
    let UP=38;
    let DOWN=40;
    var diff =10-x;
    switch(keycodenumber){
      case UP:
      var diff =10-x;
      if(this.y>=150){
        x+=diff*easing
        this.y-=x;
      }
      break;

      case DOWN:
      var diff =10-x;
      if (this.y<=height-150) {
        x+=diff*easing
        this.y+=x;
      }
      break;
    }
  };

  User.prototype.draw = function () {
    ctx.fillStyle='	#FE6161';
    ctx.fillRect(this.x,this.y-150,50,300);
  };

  function Com(){
    this.x=width-50;
    this.y=height/2;
  }

  Com.prototype.update = function () {

  };

  Com.prototype.draw = function () {
    ctx.fillStyle='	#6161fe';
    ctx.fillRect(this.x,this.y-150,50,300);
  };

  function animate(){
    ani  =  window.requestAnimationFrame(animate);
    ctx.fillStyle='#000';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle='#fff';
    ctx.fillRect((width/2)-1,0,2,height)
    p.update();
    p.draw();
    //still need to figure out to launch event on the canvas block
    document.onkeydown = function(e) {
      console.log(e.keyCode);
      u.update(e.keyCode);
    }
    c.draw();
    u.draw();
  }

  ani  =  window.requestAnimationFrame(animate);

}
