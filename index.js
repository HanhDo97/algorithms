let arr = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]
];
test = [6, 7, 4, -1, -7, 7, 8, 9];
test2 = [-2, 4, -4, 2, -7, -6, -6, 1, -1];
function caculateSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
 //   console.log(Math.abs(result));
 return result;
}
function diagonalDifference(arr) {
    var leftToRight = [];
    var rightToLeft = [];
    let j = arr[0].length;

    for (let i = 0; i < arr.length; i++) {
        j = j - 1;
        leftToRight.push(arr[i][i]);
        rightToLeft.push(arr[i][j]);
    }

    sumLeftToRight = Math.abs((caculateSum(leftToRight)));
    sumRightToLeft = Math.abs((caculateSum(rightToLeft)));

    console.log(Math.abs(sumLeftToRight - sumRightToLeft));

}
diagonalDifference(arr);