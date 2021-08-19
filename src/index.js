
import Board from "./board.js"
import Input from "./input.js"
import Game from "./game.js"
import Engine from "./engine.js"

document.addEventListener('DOMContentLoaded',() => {
    var keyPressed = function(event){ //changed const to var since needed in other files and not defined scoped
        engine.bg.play();
        controller.keyPressed(event.type, event.code)
        
        
    }

    var pauseButtonMute = function(event){
        if (event.code === 'KeyP' && !engine.paused){
            engine.pause()
        }else if (event.code ==='KeyP' && engine.paused){
            engine.unpause()
        }
        if (event.code ==='KeyM' && !engine.muted){
            engine.mute()
        }else if (event.code ==='KeyM' && engine.muted){
            engine.unmute()
        }
    }
    
    var update = function() {
        if (game.restart === true){
            game = new Game(game.level)
            board = new Board(document.querySelector("#game"),game.height*3,game.width*3);
            board.board.canvas.height = game.height;
            board.board.canvas.width = game.width;
        }

        if (game.gameWin){
            let end = true;
            engine.pause(end);
            engine.stop()
            const winId = document.getElementById('win');
            winId.removeAttribute('class')
        }


        if (!engine.paused){
            if (controller.left.pressed)  {
                game.player.moveLeft();  
            }
            if (controller.right.pressed) {
                 game.player.moveRight(); }
            if (controller.jump.pressed){   
                game.player.jump(engine.muted); 
                game.player.jumping = true;
                
            }
            if (game.triggerDoor === true){
                game = new Game(game.level)
                board = new Board(document.querySelector("#game"),game.height*3,game.width*3);
                board.board.canvas.height = game.height;
                board.board.canvas.width = game.width;
            }
        game.update();
        }
      };
      var render=function(){
        
        board.fill('#241b18')
        board.drawMap(game, game.col)
        board.drawPlayer(game.player)
        board.render();
        
    }

let game = new Game(0);
let board = new Board(document.querySelector("#game"),game.height*3,game.width*3);
// let background = new Board(document.querySelector("#weather"),game.height*3,game.width*3,true)
let controller = new Input();
let engine = new Engine(40, update, render);

board.board.canvas.height = game.height;
board.board.canvas.width = game.width;

render(); // prevent black screen, substitute later with loading screen?

if (!engine.paused){
window.addEventListener("keydown", keyPressed); //event listeners for key inputs
window.addEventListener("keyup",   keyPressed);
window.addEventListener("keypress",   pauseButtonMute);
}

engine.start();

})
