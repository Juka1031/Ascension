export default class Level {
    constructor(imgPath,block,col){
        this.tilesheet = new Image()
        this.tilesheet.src = imgPath
        // console.log(imgPath)
        this.block = block
        this.col = col
        this.map = [
        29,29,29,29,29,29,29, 6,29,29,
        30,31,29,29,29,29,29,14,29,29,
        1 ,2 ,25,25,25,25,25,22,25,25,
        1 ,2 ,29,29,29,29,29,29,29,29,
        61,62,62,62,62,62,62,63,29,29,
        29,29,29,29,29,29,29,29,29,29,
        29,29,29,29,29,29,29,29,29,57,
        25,25,25,25,25,25,25,25,57,57,
        25,25,25,25,25,25,25,57,57,57,
        61,62,62,62,62,62,62,62,62,63,
        ]


    }
    // }loadImage(imgSrc,tilesheet){
    //     return new Promise(function(resolve,reject){
    //         tilesheet = new Image()
    //         tilesheet.onload = function(){
    //             resolve(imgSrc)
    //         }
    //         tilesheet.onerror = function(){
    //             reject(imgSrc)
    //         }
    //         tilesheet.src = imgSrc
    //     })
    // }
}


// class Tilesheet {
//     constructor(area,size){
//         this.tilesheet = new Image();
//         this.tileDimensions = Math.sqrt(area)
//         this.size = size;
//     }
// }

// var levelOne = new Level("./images/castle-tileset.png",16,8,levelOneArr)