class Board {
    constructor(canvas) {
        // this.buffer  = document.createElement("canvas").getContext("2d"),
        // this.context = canvas.getContext("2d");
        // context.fillStyle = "blue";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
       
        // debugger
        var ctx = canvas.getContext("2d");
        console.log(ctx);
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


