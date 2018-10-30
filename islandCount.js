var islandMap = 
[
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
]

var islandMap2 = 
[
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 1],
]


var islandMap3 = 
[
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 1],
]

var islandMap4 = 
[
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

var islandMap5 = 
[
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]

const islandCount = (map) => {
    var neighborStack = [];
    var islandCount = 0;
    for (var i = 0; i < map.length; i++){
        for (var j = 0; j < map[i].length; j++){
            if (map[i][j] === 1){
                console.log(`Found 1 at ${i}, ${j}`);
                map[i][j] = true;
                var neighbors = findNeighbors(i, j, map);
                neighbors.forEach((neighbor) => {
                    neighborStack.push(neighbor);
                })
                console.log("after finding neighbors", neighborStack);
                while (neighborStack.length != 0){
                    let curr = neighborStack.pop();
                    map[curr[0]][curr[1]] = true;
                    var moreNeighbors = findNeighbors(curr[0], curr[1], map);
                    moreNeighbors.forEach((neighbor) => {
                        neighborStack.push(neighbor);
                    })
                    console.log("after finding more neighbors", neighborStack);
                }
                islandCount++;
            }
        }
    }
    console.log(map);
    return islandCount;
}

const findNeighbors = (i, j, map) => {
    var neighborArray = [];
    for (var x = i-1; x <= i+1; x++){
        for (var y = j-1; y <= j+1; y++){
            // console.log({x, y})
            if (x < 0 || x >= map.length || y < 0 || y >= map.length){
                // console.log("Out of range!");
            } else if (map[x][y] === 1) {
                neighborArray.push([x, y]);
            }
        }
    }
    return neighborArray;
}

console.log(islandCount(islandMap));
// console.log(islandCount(islandMap2));
// console.log(islandCount(islandMap3));
console.log(islandCount(islandMap4));
console.log(islandCount(islandMap5));
