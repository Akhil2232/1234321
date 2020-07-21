class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  };
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("white");
  
  //player Paddle
  var playerPaddle = new Paddle();
  var computerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  computerPaddle.xPosition = 10;
  computerPaddle.yPosition = 170;
  playerPaddle.display();
  computerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}