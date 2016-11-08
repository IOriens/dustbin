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
        if (len = parseInt(input_arrays[0]) != null) {
            var num = '9'
            for (var i = 0; i < len; i++) {
                var lenN = num.length,
                    index = num[0],
                    newNum = [],
                    nnn = 0
                    //console.log(index)
                for (var j = 0; j < lenN; j++) {
                    if (index == num[j]) {
                        nnn++
                        if (j == lenN - 1) {
                            newNum.push('' + nnn + index)
                        }
                    } else {
                        newNum.push('' + nnn + index)
                        nnn = 1
                        index = num[j]
                        if (j == lenN - 1) {
                            newNum.push('' + nnn + index)
                        }
                    }
                }
                //console.log(newNum,i,j)
                num = newNum.join('')
            }

            console.log(num);
        } else {
            console.log('undefined')
        }
    }
});