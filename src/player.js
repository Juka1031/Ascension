export default class Player {
    constructor() {
        this.color = "blue";
        this.height = 12;
        this.width = 12;
        this.velX = 0;
        this.velY = 0;
        this.jumping = true;
        this.posX = 20;
        this.posY = 100;
        this.lastFrameX = this.posX
        this.lastFrameY = this.posY
    }

    jump(){
        // console.log(this.jumping)
        
        if(!this.jumping){//while not jumping
        //allow the user to jump
            this.jumping = true;
            this.velY -= 20;
           
        }
    }
    moveLeft(){
        this.velX -=0.5; //when < pressed move left
        
    }
    moveRight(){
        this.velX += 0.5; //when > pressed move right
        
    }
    updatePlayer(){ //updates the player every frame
        this.lastFrameX = this.posX
        this.lastFrameY = this.posY
        this.posX += this.velX;
        this.posY += this.velY;
        
    }


}