export default class Board {
    constructor(canvas,gameHeight, gameWidth, position) {
        
        this.board  = document.createElement("canvas").getContext("2d"); //create the game board that can be dynamically resized regardless the canvas dimension
        this.context = canvas.getContext("2d");
        // console.log(this.context)
        var ctx = canvas.getContext("2d");
        canvas.height = gameHeight; //
        canvas.width = gameWidth; //
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if(position){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    };

    fill (color){
        this.board.fillStyle = color;
        this.board.fillRect(0, 0, this.board.canvas.width, this.board.canvas.height);
          
      };

    drawPlayer(player){

    //   this.board.fillStyle = color;
    //   this.board.fillRect(x, y, width, height);

      

        
        this.board.drawImage(player.playerSprite, player.frameSet[player.direction][player.spriteFrame][0], player.frameSet[player.direction][player.spriteFrame][1], 16, 16, player.posX, player.posY, player.width, player.height)
    }

    drawLevel(){

    }

    drawMap(game, columns) {
        // console.log('hi')
        for (let index = game.map.length - 1; index > -1; -- index) {
            // console.log(this)
        let value = game.map[index];
        let gameX =(value % game.levelOne.col) * game.levelOne.block;
        let gameY = Math.floor(value / game.levelOne.col) * game.levelOne.block;
        let endX = (index % columns) * game.levelOne.block;
        let endY = Math.floor(index / columns) * game.levelOne.block;

            this.board.drawImage(game.levelOne.tilesheet, gameX, gameY, game.levelOne.block, game.levelOne.block, endX, endY, game.levelOne.block, game.levelOne.block);
        // }
        
        }

        
    
      };

    render() {
        
        // console.log('hi')
        this.context.drawImage(this.board.canvas, 0, 0, this.board.canvas.width, this.board.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
        // debugger
    
    };
};