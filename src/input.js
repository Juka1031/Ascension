
export default class Input {
    constructor(keys) {
        this.left = new Input.Keys();
        this.right = new Input.Keys();
        this.jump = new Input.Keys();
    }
}


Input.Keys.prototype = {
    constructor(){

    }
}

Input.Keys = function() { //
    this.down = false; //want to key the state as not pressed
}
