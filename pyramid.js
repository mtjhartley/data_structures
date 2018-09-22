const pyramid = (row, x = 0) => {
    if (row > 0){
        let spaceStr = "";
        for (var i = 0; i < row-1; i++){
            spaceStr += " ";
        }
        for (var j = 0; j < (x * 2 + 1); j++){
            spaceStr += "*";
        }
        row -= 1;
        x += 1;
        console.log(spaceStr);
        pyramid(row, x);     
    }
}

pyramid(5);

function leftAlignPyramid(base_size){
    let pyramidArr = [];
    let start = 1;
    while (start <= base_size){
        pyramidArr.push("X");
        console.log(pyramidArr.join(''));
        start++;
    }
}

leftAlignPyramid(5);