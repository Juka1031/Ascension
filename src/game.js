
import Player from "./player";
import Level  from "./level.js";


export default class Game {
    constructor(level=0){
        this.friction = .9;
        this.gravity = 2;
        this.player = new Player();
        this.level ||= 0
        this.level +=level
        this.levelOne = new Level(this.level)
        this.col = this.levelOne.gameCol;
        this.row = this.levelOne.gameRow;
        this.tileSize = 16;
        this.triggerDoor = false;
        this.height = this.tileSize * this.row;     //controls the game size, the larger it is the larger the field
        this.width = this.tileSize * this.col;
        this.map = this.levelOne.map
        this.collision_map = this.levelOne.collisionMap
    }
    
    borderCollision(player){ 
        if(player.posX < 0 ){//if the player collides with the left side, stop him and reduce velocity to 0
            player.velX = 0;
            player.posX = 0;
        }else if (player.posX +player.width > this.width){
            player.velX = 0;
            player.posX = this.width-player.width;
        }if (player.posY < 0 ){ //prevent the player from falling through the floor (bottom)
            player.jumping = true;
            player.velY = 0;
            player.posY = 0;
        }else if (player.posY + player.height > this.height){
            player.jumping = false;
            player.velY = 0;
            player.posY = this.height-player.height;
        }
       
    }


    collideTile(player){ 

    //topleft
    const topLeftCorner  = Math.floor(player.posY/this.tileSize) * this.col + Math.floor(player.posX/this.tileSize);
    this.collide(this.collision_map[topLeftCorner], player, Math.floor(player.posX/this.tileSize) * this.tileSize, Math.floor(player.posY/this.tileSize) * this.tileSize);

    //topright
    const topRightCorner  = Math.floor(player.posY/this.tileSize) * this.col + Math.floor((player.posX+player.width)/this.tileSize);
    this.collide(this.collision_map[topRightCorner], player, Math.floor((player.posX+player.width)/this.tileSize) * this.tileSize, Math.floor(player.posY/this.tileSize) * this.tileSize);
    
    //bottomleft
    const bottomLeftCorner = Math.floor((player.posY + player.height)/this.tileSize) * this.col + Math.floor(player.posX/this.tileSize);
    this.collide(this.collision_map[bottomLeftCorner], player, Math.floor(player.posX/this.tileSize) * this.tileSize, Math.floor((player.posY + player.height)/this.tileSize) * this.tileSize);

    //bottomright
    const bottomRightCorner = Math.floor((player.posY + player.height)/this.tileSize) * this.col + Math.floor((player.posX+player.width)/this.tileSize);
    this.collide(this.collision_map[bottomRightCorner], player, Math.floor((player.posX+player.width)/this.tileSize) * this.tileSize, Math.floor((player.posY + player.height)/this.tileSize) * this.tileSize);
        

    const center =  Math.floor((player.posY + (player.height/2))/this.tileSize) * this.col + Math.floor((player.posX+(player.width/2))/this.tileSize);
    this.collide(this.collision_map[center], player, Math.floor((player.posX+player.width)/this.tileSize) * this.tileSize, Math.floor((player.posY + player.height)/this.tileSize) * this.tileSize,true);
    }
    collide(value,object,tile_x,tile_y,center){
        
        switch(value) { 
            case  1: this.collideTop(object, tile_y); 
                        break;
            case  2: this.collideRight(object, tile_x + this.tileSize);
                        break;
            case  3: if (this.collideTop(object, tile_y)) 
                        return;
                     this.collideRight(object, tile_x + this.tileSize); 
                        break;
            case  4: this.collideBot(object, tile_y + this.tileSize); 
                        break;
            case  5: if (this.collideTop(object, tile_y)) 
                        return;
                     this.collideBot(object, tile_y + this.tileSize); 
                        break;
            case  6: if (this.collideRight(object, tile_x + this.tileSize)) 
                        return;
                     this.collideBot(object, tile_y + this.tileSize);
                        break;
            case  7: if (this.collideTop(object, tile_y)) 
                        return;
                    if (this.collideRight(object, tile_x + this.tileSize))
                        return;
                    this.collideBot(object, tile_y + this.tileSize);
                        break;
            case  8: this.collideLeft(object, tile_x); 
                        break;
            case  9: if (this.collideTop(object, tile_y))
                        return;
                     this.collideLeft(object, tile_x); 
                        break;
            case 10: if (this.collideLeft (object, tile_x)) 
                        return;
                    this.collideRight(object, tile_x + this.tileSize);
                        break;
            case 11: if (this.collideTop(object, tile_y)) 
                        return;
                     if (this.collideLeft(object, tile_x)) 
                        return;
                     this.collideRight(object, tile_x + this.tileSize);
                        break;
            case 12: if (this.collideLeft(object, tile_x))
                        return;
                     this.collideBot(object, tile_y + this.tileSize);
                        break;
            case 13: if (this.collideTop(object, tile_y)) 
                        return;
                     if (this.collideLeft(object, tile_x)) 
                        return;
                     this.collideBot(object, tile_y + this.tileSize); 
                        break;
            case 14: if (this.collideLeft (object, tile_x)){
                        return;
                        }
                     if (this.collideRight(object, tile_x)) {
                        return;
                     }
                     this.collideBot(object, tile_y + this.tileSize); 
                        break;
            case 15: if (this.collideTop(object, tile_y))
                        return;
                     if (this.collideLeft (object, tile_x)) 
                        return;
                     if (this.collideRight(object, tile_x + this.tileSize)) 
                        return;
                     this.collideBot(object, tile_y + this.tileSize); 
                        break;
            case 20: {
                    
                    if(center){
                    this.level += 1
                    this.levelOne = new Level(this.level)
                    this.triggerDoor = true;
                    this.player.posX -=10;
                    break;
                    }
            }
            
          }
        
      
    
      
    }
    
    
    collideBot(object,tile_bottom){
        if (object.posY < tile_bottom && object.lastFrameY >= tile_bottom) {
            object.posY = tile_bottom
            object.velY = 0;     
            return true;               
          } return false;  
    
    }
    collideLeft(object,tile_left){
            if (object.posX+object.width > tile_left && (object.lastFrameX+object.width) <= tile_left) {
                
                object.posX=tile_left - object.width-.01;
                object.velX = 0;
                return true;
        
    }return false;
}

    collideRight(object,tile_right){
        if (object.posX < tile_right && (object.lastFrameX) >= tile_right) {
            object.posX = tile_right
            object.velX = 0;
            return true;
    
        } return false;
    }


    collideTop(object, tile_top){
    if (object.posY+object.height> tile_top && object.lastFrameY + object.height <= tile_top) {
        object.posY = tile_top - object.height -.01;
        object.velY = 0;
        object.jumping = false;
        
        return true;
  
      } return false;
}
    
    
    physics() {
        this.player.velY += this.gravity;  //controls the levels physics
        this.player.updatePlayer();
        this.player.velX *= this.friction;
        this.player.velY *= this.friction;
        this.borderCollision(this.player);
        this.collideTile(this.player);
        
    }


    update(){//updates the physics every frame
        this.physics();

    }
  
}


