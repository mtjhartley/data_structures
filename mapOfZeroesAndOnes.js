const map = [
    [0, 0, 0, 1, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0]
]

const paint = (map) => {
    let yCoordinates = new Set([]);
    for (let i = 0; i < map.length; i++){
        for (let j = 0; j < map[i].length; j++){
            if (map[i][j] == 1){
                yCoordinates.add(j);
            }
            // if (yCoordinates.has(j)){
            //     map[i][j] = 1;
            // }
        }
    }
    let newMap = [];
    for (let x = 0; x < map.length; x++){
        let tempArray = [];
        for (let y = 0; y < map[x].length; y++){
            if (yCoordinates.has(y)){
                tempArray.push(1);
            } else {
                tempArray.push(0);
            }
        }
        newMap.push(tempArray);
    }
    console.log(newMap);
}

paint(map);