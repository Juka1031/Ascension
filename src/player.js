export default class Player {
    constructor() {
        this.color = "blue";
        this.height = 14;
        this.width = 14;
        this.velX = 0;
        this.velY = 0;
        this.jumping = true;
        this.posX = 20;
        this.posY = 100;
        this.lastFrameX = this.posX
        this.lastFrameY = this.posY
        this.playerSprite = new Image();
        this.playerSprite.src = "src/images/charc.png"
        this.direction = "left"
        this.spriteFrame = 0;
        this.jumpSfx= new Audio("src/sounds/jump.wav")
        this.frameSet = {
        "right": [[176,32],[160,32],[144,32]],
        "left": [[176,16],[160,16],[144,16]]
        }
    }

    

    jump(muted){
        
        if(!this.jumping){//while not jumping
            if (!muted){
                this.jumpSfx.play();
                this.jumping = true;
                this.velY -= 20;
            }else{
                this.jumping = true;
                this.velY -= 20;
            }
        }
    }
    moveLeft(){
        this.spriteFrame += 1
        if (this.spriteFrame === 2){
            this.spriteFrame = 0;
        }
        this.direction = "left"
        this.velX -=0.5; //when < pressed move left
        
    }
    moveRight(){
        this.direction = "right"
        this.spriteFrame += 1
        if (this.spriteFrame === 2){
            this.spriteFrame = 0;
        }
        this.velX += 0.5; //when > pressed move right
        
    }
    updatePlayer(){ //updates the player every frame

        this.lastFrameX = this.posX
        this.lastFrameY = this.posY
        this.posX += this.velX;
        this.posY += this.velY;
        
    }


}

