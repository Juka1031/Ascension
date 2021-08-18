export default class Engine {
    constructor(fps, update, render){
        this.fps = fps; //frames per sec
        this.updateFunc = update; //do i need this
        this.renderFunc = render; // do i need this
        this.afr = undefined;
        this.updated = false;
        this.timeTilUpdate = 0; //time elapsed between each loop
        this.timeElapsed = 0;
        this.paused = false;
        this.muted = false;
        this.bg = new Audio("src/sounds/bg.mp3")
        this.bg.volume = .5;
        this.characPausedXY = [0,0]

}
    run(loop){ // one loop
        this.timeTilUpdate += loop - this.timeElapsed; //sets the time from last loop
        this.timeElapsed = loop;
        while(this.timeTilUpdate >= this.fps &&!this.paused) { //if more than frame timeElapsed has passed update the movements
            this.timeTilUpdate -= this.fps; //subtract so the while isnt always true
            this.updateFunc();
            this.renderFunc();
        }
       

        requestAnimationFrame(this.handleRun); //loop back to run
    }
    pause(){
        this.paused = true;

        const pauseId = document.getElementById('pause');
        pauseId.removeAttribute('class')

    }
    unpause(){
        this.paused = false;
        const pauseId = document.getElementById('pause');
        pauseId.setAttribute('class', 'hidden')
        this.start();
        
    }
    mute(){
        this.muted = true;
        
    }

    unmute(){
        this.muted = false;
      
    }

    
    handleRun = (gameTime) => { //intermediate helper run function so it doesnt lose context of this, and prevent recursion loop
        if (!this.paused){
        this.run(gameTime);
        }
    }

    start(){
        this.timeTilUpdate = this.fps;
        this.timeElapsed =  window.performance.now()
        this.afr = window.requestAnimationFrame(this.handleRun);
        
        
    }

    stop(){
        window.cancelAnimationFrame(this.animation_frame_request);
    }

    
}
