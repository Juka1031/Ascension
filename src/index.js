
import Board from "./board.js"
import Input from "./input.js"
import Game from "./game.js"
import Engine from "./engine.js"

document.addEventListener('DOMContentLoaded',() => {
    var keyPressed = function(event){ //changed const to var since needed in other files and not defined scoped
        controller.keyPressed(event.type, event.code)
    }
    var update = function() {
        // console.log(controller.left.active)
        if (controller.left.pressed)  {
             game.player.moveLeft();  
        }
        if (controller.right.pressed) { game.player.moveRight(); }
        // debugger
        if (controller.jump.pressed){ 
            
            game.player.jump(); 
            game.player.jumping = true;
            // console.log(game.player.posX)
        }
        
        game.update();
      };
      var render=function(){
        board.fill('#241b18')
        board.drawMap(game, game.col)
        board.drawPlayer(game.player.posX, game.player.posY, game.player.width, game.player.height, game.player.color)
        // console.log(game.player.posY)
        // console.log(game.player.posX)
        board.render();
        //
    }
const board = new Board(document.querySelector("canvas"));
const controller = new Input();
const game = new Game();
const engine = new Engine(40, update, render);

board.board.canvas.height = game.height;
board.board.canvas.width = game.width;

render(); // prevent black screen, substitute later with loading screen?

window.addEventListener("keydown", keyPressed); //event listeners for key inputs
window.addEventListener("keyup",   keyPressed);

engine.start();

})
