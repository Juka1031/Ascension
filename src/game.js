
import Player from "./player";
import Level  from "./level.js";


export default class Game {
    constructor(){
        this.friction = .9;
        this.gravity = 2;
        this.player = new Player();
        this.col = 10;
        this.row = 10;
        this.tileSize = 16;
        this.height = this.tileSize * this.row;     //controls the game size, the larger it is the larger the field
        this.width = this.tileSize * this.col;
        this.levelOne = new Level("src/images/castle-tileset.png",16,8)
        this.map = this.levelOne.map

        this.collision_map = [
        0,0,0,0,0,0,0,0,0,0,
        5,1,0,0,0,0,0,0,0,0,
        3,5,0,0,0,0,0,0,0,0,
        2,2,1,1,1,1,1,5,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,
        0,0,0,0,0,0,0,0,1,9,
        0,0,0,0,0,0,0,1,9,9,
        1,1,1,1,1,1,1,9,9,1,
        2,1,1,1,1,1,1,1,1,1,
        ];
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


    //i want to pull a tile from the collision maps coordinates(array) and see what value it contains
    //depending on that value i will place collision blocks on either top,left,bottom,right
    collideTile(player){ //this will return the tile the player is currently on the map
        //need for all 4 corners of the character
        
        var top = player.posY;
        var bot = player.posY + player.height;
        var left = player.posX;
        var right = player.posX+ player.width;

        //case 1 top left corner
        //we are able to get the position in the collision map by multiplying the number of cols relative to its position (row) divide by each blocksize and adding (y)
        //this works with Math.floor because arrays start at 0th index

        const tilePosLeftTop = Math.floor(top/this.tileSize) * this.col + Math.floor(left/this.tileSize) //tilePos is its corresponding in map[]
        
        //case 2 bottom left corner

        const tilePosLeftBottom = Math.floor(bot/this.tileSize-1) * this.col + Math.floor(left/this.tileSize)

        //case 3 top right corner

        const tilePosRightTop = Math.floor(top/this.tileSize) * this.col + Math.floor(right/this.tileSize)
        // console.log(Math.floor(top/this.tileSize) * this.col + Math.floor(right/this.tileSize))
        //case 4 bottom right corner
        
        const tilePosRightBottom = Math.floor(bot/this.tileSize-1) * (this.col) + Math.floor(right/this.tileSize)
        
        
        // this.collide(this.collision_map[tilePosLeftTop],player, Math.floor(top/this.tileSize) *this.tileSize, Math.floor(left/this.tileSize) *this.tileSize) //tile pos array, player obj, tilex,tiley, tilesize
        // this.collide(this.collision_map[tilePosRightTop],player, Math.floor(top/this.tileSize) *this.tileSize, Math.floor(right/this.tileSize) *this.tileSize)
        // this.collide(this.collision_map[tilePosLeftBottom],player,  Math.floor(left/this.tileSize) *this.tileSize, Math.floor(bot/this.tileSize) *this.tileSize)
        // this.collide(this.collision_map[tilePosRightBottom],player,  Math.floor(right/this.tileSize) *this.tileSize, Math.floor(bot/this.tileSize) *this.tileSize)
        
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
