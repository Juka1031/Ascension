export default class Player {
    constructor() {
        this.color = "#ff0000";
        this.height = 15;
        this.width = 15;
        this.velX = 0;
        this.velY = 0;
        this.jumping = false;
        this.x = 50
        this.y = 100
    }

    jump(){
        if(!this.jumping){//while not jumping
        //allow the user to jump
            this.jumping = true;
            this.velY -= 15;
        }
    }
    moveLeft(){
        this.velX -=0.5; //when < pressed move left
    }
    moveRight(){
        this.velX += 0.5; //when > pressed move right
    }
    updatePlayer(){
        this.x += this.velX;
        this.y += this.velY;
    }
}