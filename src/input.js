
export default class Input {
    constructor() {
        // debugger
        this.left = new Keys();
        this.right = new Keys();
        this.jump = new Keys();
        // debugger
    }

    
    keyPressed(event, eventCode){ //the function invoked after eventlistener
        // debugger
        var pressed = false;
        if (event === "keydown"){
            pressed = true;
        } else{ //keyup
            pressed = false;
        }
        if (eventCode === 'Space') {
            this.jump.getInput(pressed); //change the state of the being pressed
        }else if (eventCode === 'ArrowRight' ){
            this.right.getInput(pressed);
        }else if (eventCode === 'ArrowLeft' ){
            this.left.getInput(pressed);
        };
    };

    
}

class Keys {
    constructor(){
        this.pressed = false;
        this.down = false;
    }
    getInput(down){ //changes the action 
        // debugger
        if (this.down != down){ //sets the key state to be set as true(pressed)
            this.pressed = down;
        } 
      this.down = down;
    //   debugger
    }
}



