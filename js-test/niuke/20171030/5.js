// process.stdin.resume();
// process.stdin.setEncoding('ascii');

var input = "999, 5, '0'";
var input_array = "";

// process.stdin.on('data', function (data) {
//     input += data;
// });

// process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
    	var line = input_array[nLine++].trim();
    	if(line === ''){
    		continue;
    	}
        var input_arrays = line.split(', ');
        var a = input_arrays[0];
        var b = +input_arrays[1];
        var c = input_arrays[2];
        c = c.slice(1, -1)
        var lena = a.length
        // console.log(a,b,c,lena)
        if(lena >= b) {
            console.log(a)
        }else {
            a = a.split('')
            for(var i = 0, len =b - a.length; i < len; i ++ ) {
                a.unshift(c)
            }
            a = a.join('')
        }
        console.log(a)
        
    }
// });