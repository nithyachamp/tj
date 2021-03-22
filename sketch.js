var backgroundImg;
var cat,cat_chasing;
var mouse,mouse_running;
function preload() {
backgroundImg = loadImage("garden.png")
cat_chasing = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png")
mouse_running = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
//load the images here
}
function setup(){
    createCanvas(1000,800);
cat = createSprite(780,480,10,30);
mouse = createSprite(150,680,20,50);
cat.addAnimation("xxxxxx", cat_chasing);
cat.scale = 0.2;
mouse.addAnimation("wwwwww",mouse_running);
mouse.scale = 0.2;
    //create tom and jerry sprites here

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keycode === LEFT_ARROW){

    cat.addAnimation("VVVVV", cat_chasing)
  //  cat.changeAnimation
}
  //For moving and changing animation write code here


}
