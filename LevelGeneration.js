const floor = '⏺'
const wall = '⏹'
const neighbour = 'o'

//wall is 1, floor is 0
module.exports = {

    CreateFloor:function (){
        //Create first room, top left of the floor
        const r = new Room(0,0,5,5)
        r.tilesCoordinates = CreateRoom(r.xCoord,r.yCoord,r.xDim,r.yDim)
        r.CalculateNeighbouringCoordinates()
        //console.log(r.tilesCoordinates)
        var debugGraphics = ""
        for(var y = 0; y < r.yDim; y++){
            debugGraphics += "\n"
            for (var x = 0; x < r.xDim; x++){
                if (r.tilesCoordinates[y][x] == 1) debugGraphics += wall
                else if (r.tilesCoordinates[y][x] == 0) debugGraphics += floor
            }
        }
        return debugGraphics
    }
}

function CreateRoom (startX, startY, xDim, yDim) {
    var level = []
    level[0] = []

    for (var y = 0 + startY; y < yDim + startY; y++){
        level[y] = []
        for (var x = 0 + startX; x < xDim + startX; x++){
            level[y][x] = []
            if (x == 0 + startX || 
                x == xDim + startX - 1 || 
                y == 0 + startY || 
                y == yDim + startY - 1){
                level[y][x] = 1
            }
            else{
                level[y][x] = 0
            }
        }
    }
    return level
}

class Room {
    constructor(xCoord, yCoord, xDim, yDim) {
        //X,Y Coordinates (top left), Width and Height
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.xDim = xDim;
        this.yDim = yDim;

        var tilesCoordinates

        //Instantiate bidimensional array for storing free neighbouring tiles for spawning next room
        this.neighbourCoordinates = []
        this.neighbourCoordinates[0] = []
    }

    CalculateNeighbouringCoordinates()        
    {
        //console.log(this.neighbourCoordinates)
        //Upper wall
        for(var i = this.xCoord; i < this.xDim - this.xCoord; i++){
            if (!this.yCoord == 0){
                this.neighbourCoordinates[i] = []
                this.neighbourCoordinates[i][this.yCoord - 1] = true
            }
        }
        //Right wall
        for(var i = this.yCoord; i < this.yDim - this.yCoord; i++){
            this.neighbourCoordinates[this.xDim + this.xCoord + 1] = []
            this.neighbourCoordinates[this.xDim + this.xCoord + 1][i] = true
        }
        //Left wall
        for(var i = this.yCoord; i < this.yDim - this.yCoord; i++){
            if (!this.xCoord == 0){
                this.neighbourCoordinates[this.xCoord - 1] = []
                this.neighbourCoordinates[this.xCoord - 1][i] = true
            }
        }
        //Bottom wall
        for(var i = this.xCoord; i < this.xDim - this.xCoord; i++){
            this.neighbourCoordinates[i] = []
            this.neighbourCoordinates[i][this.yDim + this.yCoord + 1] = true
        }
    }
  }