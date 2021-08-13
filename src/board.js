class Board {
    constructor(canvas) {
        // this.buffer  = document.createElement("canvas").getContext("2d"),
        // this.context = canvas.getContext("2d");
        // context.fillStyle = "blue";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
       
        // debugger
        var ctx = canvas.getContext("2d");
        canvas.height = 600;
        canvas.width = 600;
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


