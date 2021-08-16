export default class Level {
    // constructor(imgPath,block,col){
    //     this.tilesheet = new Image()
    //     this.tilesheet.src = imgPath
    //     // console.log(imgPath)
    //     this.block = block
    //     this.col = col
    //     this.map = [
    //     29,29,29,29,29,29,29, 6,29,29,
    //     30,31,29,29,29,29,29,14,29,29,
    //     1 ,2 ,25,25,25,25,25,22,25,25,
    //     1 ,2 ,29,29,29,29,29,29,29,29,
    //     61,62,62,62,62,62,63,29,29,29,
    //     29,29,29,29,29,29,29,29,29,29,
    //     29,29,29,29,29,29,29,29,29,57,
    //     25,25,25,25,25,25,25,25,57,57,
    //     25,25,25,25,25,25,25,57,57,57,
    //     61,62,62,62,62,62,62,62,62,63,
    //     ]


    // }
    constructor(levelstr){
        var fs = require("fs");
        var lvlFile = fs.readFileSync(`src/levels/level${levelstr}.txt`).toString('utf-8');
        console.log(lvlFile)
        var lvlDataArray = lvlFile.split("\n")
        this.tilesheet = new Image()
        this.tilesheet.src = lvlDataArray[0]
        // console.log(imgPath)
        this.block = lvlDataArray[1]
        this.col = lvlDataArray[2]
        this.map = lvlDataArray[3]


    }
}