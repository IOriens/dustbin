// x = 2
// if(typeof x !== 'number') {
//     return false
// } else {
//     console.log((parseInt(x) + '').length === ('' + x).length )
// }

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        var input_arrays = line.split(' ');
        var x = +input_arrays[0];
        if (typeof x !== 'number') {
            console.log(false)
        } else {
            console.log((parseInt(x) + '').length === ('' + x).length)
        }
    }
});