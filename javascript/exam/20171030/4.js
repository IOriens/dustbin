// process.stdin.resume();
// process.stdin.setEncoding('ascii');

var input = "[41,2,3,3]\n[3, 30, 34, 5, 9]\n[41,2,3,3]";
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
        var input_arrays = JSON.parse(line);
        input_arrays.sort(function(a, b) {
            return ''+ a + b < '' + b + a
        })
     
        
        console.log(input_arrays.join(''));
    }
// });