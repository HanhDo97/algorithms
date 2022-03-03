let arr = [-4,3,-9,0,4,1];
let data = {
    'positive': 0, 'negative': 0, 'zero': 0
}

function plusMinus(arr) {
    arr.forEach(value => {
        if (value > 0) data.positive++;
        if (value < 0) data.negative++;
        if (value == 0) data.zero++
    });

    return [
        (data.positive / arr.length).toFixed(6),
        (data.negative / arr.length).toFixed(6),
        (data.zero / arr.length).toFixed(6)
    ]
}
console.log(plusMinus(arr));