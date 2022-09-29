function squareFun(num) {
    squareResult = num * num;
    return squareResult;
}

function squareRootFun(num) {
    squareRootResult = Math.sqrt(num);
    return squareRootResult;
}

function distanceFun(x1, y1, x2, y2) {
    distance = squareRootFun(squareFun((x2-x1)) + squareFun((y2-y1)));
    return distance;
}

module.exports = {distanceFun};
