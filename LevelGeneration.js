const floor = '.'
const wall = 'x'

//wall is 1, floor is 0
module.exports = {

    CreateRoom:function (startX, startY, roomDimension) {
        var level = []
        level[0] = []

        for (var y = 0 + startY; y < roomDimension + startY; y++){
            level[y] = []
            for (var x = 0 + startX; x < roomDimension + startX; x++){
                level[y][x] = []
                if (x == 0 + startX || 
                    x == roomDimension + startX - 1 || 
                    y == 0 + startY || 
                    y == roomDimension + startY - 1){
                    level[y][x] = 1
                    //console.log(level[x][y])
                }
                else{
                    level[y][x] = 0
                    //console.log(level[x][y])
                }
            }
        }
        return level
    }
}