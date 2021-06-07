var tommy, tommyImg, tommyWalk,tommySit

var jerry, jerryImg, jerryTease,jerryBecomeDetective

var jungleBackground,JungleBackgroundImg

function preload() {
    //load the images here
    JungleBackground=loadImage("images/garden.png")
    tommyImg=loadImage("images/cat1.png")
    jerryImg=loadImage("images/mouse1.png")
    jerryTease=loadAnimation("images/mouse2.png","images/mouse3.png")
    tommyWalk=loadAnimation("images/cat2.png","images/cat3.png")
    tommySit=loadImage("images/cat4.png")
    jerryBecomeDetective=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    
    tommy=createSprite(800,600,30,30)
    tommy.addImage("sit",tommyImg)
    tommy.scale=0.2
    tommy.debug = false
    tommy.setCollider("rectangle",0,0,550,550);
    jerry=createSprite(200,630,30,30)
    jerry.addImage("present Sir",jerryImg)
    jerry.scale=0.1
    jerry.debug = false
    jerry.setCollider("rectangle",0,0,350,350);
    

    
    
}

function draw() {

    background(JungleBackground);
    //Write condition here to evalute if tom and jerry collide
    if(tommy.x -jerry.x <= 70 && jerry.x-tommy.x<= tommy.width/2+jerry.width/2){
            tommy.velocityX=0
            tommy.addImage("sit",tommySit)
            tommy.changeImage("sit",tommySit)
            jerry.addImage("yeah boi",jerryBecomeDetective)
            jerry.changeImage("yeah boi",jerryBecomeDetective)
    }

    
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        jerry.addAnimation("tease",jerryTease)
        jerry.changeAnimation("tease",jerryTease)
        jerry.frameDelay = 9

        tommy.addAnimation("walk",tommyWalk)
        tommy.changeAnimation("walk",tommyWalk)
        tommy.framDelay = 9
        tommy.velocityX=-3
    }

}
