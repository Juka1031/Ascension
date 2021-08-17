
import Player from "./player";
import Level  from "./level.js";


export default class Game {
    constructor(){
        this.friction = .9;
        this.gravity = 2;
        this.player = new Player();
        this.levelOne = new Level(1)
        
        this.col = this.levelOne.gameCol;
        this.row = this.levelOne.gameRow;
        // console.log(this.col)
        // console.log(this.row)
        this.tileSize = 16;
        this.height = this.tileSize * this.row;     //controls the game size, the larger it is the larger the field
        this.width = this.tileSize * this.col;
        
        // this.levelOne = new Level("1")
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
        //need for all 4 corners of the character
        var bottom, left, right, top, value;
        // var top = player.posY;
        // var bot = (player.posY + player.height);
        // var left = player.posX;
        // var right = (player.posX+ player.width);
        //case 1 topleft

        // top    = Math.floor(player.getTop()    / this.tileSize);
        // left   = Math.floor(player.getLeft()   / this.tileSize);
        // value  = this.collision_map[top * this.col + left];
        // this.collide(value, player, left * this.tileSize, top * this.tileSize, this.tileSize);
        const tilePosLeftTop = Math.floor(player.posY/this.tileSize) * this.col + Math.floor(player.posX/this.tileSize) //tilePos is its corresponding in map[]
        this.collide(this.collision_map[tilePosLeftTop],player, Math.floor(player.posX/this.tileSize) *this.tileSize, Math.floor(player.posY/this.tileSize) *this.tileSize)
        //case 2 bottom player.posX corner

        const tilePosRightTop = Math.floor(player.posY/this.tileSize) * this.col + Math.floor((player.posX+ player.width)/this.tileSize)
        this.collide(this.collision_map[tilePosRightTop],player, Math.floor(player.posY/this.tileSize) *this.tileSize, Math.floor((player.posX+ player.width)/this.tileSize) *this.tileSize)



    //     bottom = Math.floor(player.getBottom() / this.tileSize)-1;
    // left   = Math.floor(player.getLeft()   / this.tileSize);
    // value  = this.collision_map[bottom * this.col + left];
    // this.collide(value, player, left * this.tileSize, bottom * this.tileSize, this.tileSize);
        const tilePosLeftBottom = Math.floor((player.posY + player.height)/this.tileSize-1) * (this.col) + Math.floor(player.posX/this.tileSize)
        this.collide(this.collision_map[tilePosLeftBottom],player,  Math.floor(player.posX/this.tileSize) *this.tileSize, Math.floor((player.posY + player.height)/this.tileSize) *this.tileSize)
        //case 3 player.posY right corner

      
        //case 4 bottom (player.posX+ player.width) corner
        

        // bottom = Math.floor(player.getBottom() / this.tileSize)-1;
        // right  = Math.floor(player.getRight()  / this.tileSize);
        // value  = this.collision_map[bottom * this.col + right];
        // this.collide(value, player, right * this.tileSize, bottom * this.tileSize, this.tileSize);
        const tilePosRightBottom = Math.floor((player.posY + player.height)/this.tileSize-1) * (this.col) + Math.floor((player.posX+ player.width)/this.tileSize)
        this.collide(this.collision_map[tilePosRightBottom],player,  Math.floor((player.posX+ player.width)/this.tileSize) *this.tileSize, Math.floor((player.posY + player.height)/this.tileSize) *this.tileSize)
      
        //so the bottom detects the collision of the walls ergo problem is leftposleftbottom
        
        
    }
    collide(value,object,tile_x,tile_y){
       
        let tile_size = this.tileSize;
    //    console.log(value)
        switch(value) { 
    
           
            case  1: this.collideTop(object, tile_y); 
                        break;
            case  2: this.collideRight(object, tile_x + tile_size);
                        break;
            case  3: if (this.collideTop(object, tile_y)) 
                        return;
                     this.collideRight(object, tile_x + tile_size); 
                        break;
            case  4: this.collideBot(object, tile_y + tile_size); 
                        break;
            case  5: if (this.collideTop(object, tile_y)) 
                        return;
                     this.collideBot(object, tile_y + tile_size); 
                        break;
            case  6: if (this.collideRight(object, tile_x + tile_size)) 
                        return;
                     this.collideBot(object, tile_y + tile_size);
                        break;
            case  7: if (this.collideTop(object, tile_y)) 
                        return;
                    if (this.collideRight(object, tile_x + tile_size))
                        return;
                    this.collideBot(object, tile_y + tile_size);
                        break;
            case  8: this.collideLeft(object, tile_x); 
                        break;
            case  9: if (this.collideTop(object, tile_y))
                        return;
                     this.collideLeft(object, tile_x); 
                        break;
            case 10: if (this.collideLeft (object, tile_x)) 
                        return;
                    this.collideRight(object, tile_x + tile_size);
                        break;
            case 11: if (this.collideTop(object, tile_y)) 
                        return;
                     if (this.collideLeft(object, tile_x)) 
                        return;
                     this.collideRight(object, tile_x + tile_size);
                        break;
            case 12: if (this.collideLeft(object, tile_x))
                        return;
                     this.collideBot(object, tile_y + tile_size);
                        break;
            case 13: if (this.collideTop(object, tile_y)) 
                        return;
                     if (this.collideLeft(object, tile_x)) 
                        return;
                     this.collideBot(object, tile_y + tile_size); 
                        break;
            case 14: if (this.collideLeft (object, tile_x)){
                        console.log('left')
                        return;
                        }
                     if (this.collideRight(object, tile_x)) {
                        console.log('right')
                        return;
                     }
                     this.collideBot(object, tile_y + tile_size); 
                        // console.log('bot')
                        break;
            case 15: if (this.collideTop(object, tile_y))
                        return;
                     if (this.collideLeft (object, tile_x)) 
                        return;
                     if (this.collideRight(object, tile_x + tile_size)) 
                        return;
                     this.collideBot(object, tile_y + tile_size); 
                        break;
          }
        
      
    
      
    }
    
    
    
    collideBot(object,tile_bottom){
        if (object.posY < tile_bottom && object.lastFrameY >= tile_bottom) {
            object.posY = tile_bottom// Move the top of the object to the bottom of the tile.
            object.velY = 0;     // Stop moving in that direction.
            return true;               // Return true because there was a collision.
          } return false;  
    
    }
    // collideBot (object, tile_bottom) {
    //     if (object.getTop() < tile_bottom && object.getOldTop() >= tile_bottom) {
    
    //       object.setTop(tile_bottom);
    //       object.velY = 0;     
    //       return true;             
    
    //     } return false;            
    
    // };
    // collideLeft(object, tile_left) {
    
    //     if (object.posX+object.width > tile_left && object.getOldRight() <= tile_left) {
    
    //     object.posX=tile_left - object.width-.01;// -0.01 is to fix a small problem with rounding
    //     object.velX = 0;
    //     return true;
    
    //     }return false;
    
    // };
    collideLeft(object,tile_left){
        
            if (object.posX+object.width > tile_left && (object.lastFrameX+object.width) <= tile_left) {
                console.log('left')
                object.posX=tile_left - object.width-.01;
                object.velX = 0;
                return true;
        
    }return false;
}


    collideRight(object,tile_right){
        console.log(object.posX < tile_right && (object.lastFrameX) >= tile_right)
        if (object.posX < tile_right && (object.lastFrameX) >= tile_right) {
            object.posX = tile_right
            object.velX = 0;
            return true;
    
        } return false;
    }

    // collideRight(object, tile_right) {
    //     if (object.getLeft() < tile_right && object.getOldLeft() >= tile_right) {
    //       object.setLeft(tile_right);
    //       object.velocity_x = 0;
    //       return true;
    
    //     } return false;
    
    //   }

    collideTop(object, tile_top){
    // console.log(tile_top)
    // console.log(object.posY+object.height)
    // console.log(object.posY+object.height> tile_top && object.lastFrameY + object.height <= tile_top)
    if (object.posY+object.height> tile_top && object.lastFrameY + object.height <= tile_top) {
        // console.log('top')
        object.posY = tile_top - object.height -.01;
        object.velY = 0;
        object.jumping = false;
        
        return true;
  
      } return false;
}
    
    // collideTop(object, tile_top) {
        
    //     if (object.getBottom() > tile_top && object.getOldBottom() <= tile_top) {
    
    //     object.setBottom(tile_top - 0.01);
    //     object.velY = 0;
    //     object.jumping    = false;
    //     return true;
    
    //     } return false;
    
    // };
    
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



// }