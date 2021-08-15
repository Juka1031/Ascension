

export default class Board {
    constructor(canvas) {
        
        this.board  = document.createElement("canvas").getContext("2d"); //create the game board that can be dynamically resized regardless the canvas dimension
        this.context = canvas.getContext("2d");
        // context.fillStyle = "blue";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
       
        var ctx = canvas.getContext("2d");
        canvas.height = 500;
        canvas.width = 500;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    };

    fill (color){
        this.board.fillStyle = color;
        this.board.fillRect(0, 0, this.board.canvas.width, this.board.canvas.height);
          
      };

    drawPlayer(x,y,width,height,color){

      this.board.fillStyle = color;
      this.board.fillRect(x, y, width, height);
    //   debugger
    }

    drawLevel(){

    }

    drawMap(game, columns) {

        for (let index = game.map.length - 1; index > -1; -- index) {
            // console.log(this)
        let value = game.map[index];
        let source_x =(value % game.levelOne.col) * game.levelOne.block;
        let source_y = Math.floor(value / game.levelOne.col) * game.levelOne.block;
        let destination_x = (index % columns) * game.levelOne.block;
        let destination_y = Math.floor(index / columns) * game.levelOne.block;
            // console.log(game.levelOne.tilesheet)
        // game.levelOne.tilesheet.onload = function(){
            this.board.drawImage(game.levelOne.tilesheet, source_x, source_y, game.levelOne.block, game.levelOne.block, destination_x, destination_y, game.levelOne.block, game.levelOne.block);
        // }
        
        }

        
    
      };

    render() {
        
        // console.log('hi')
        this.context.drawImage(this.board.canvas, 0, 0, this.board.canvas.width, this.board.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
        // debugger
    
    };
};


