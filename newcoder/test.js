// var line;

// var inpu = `<recipe>
//       <recipename>Ice Cream Sundae</recipename>
//       <ingredlist>
//            <listitem>
//                  <quantity>3</quantity>
//                  <itemdescription>chocolate syrup or chocolate fudge</itemdescription>
//            </listitem>
//            <listitem>
//                  <quantity>1</quantity>
//                  <itemdescription>nuts</itemdescription>
//            </listitem>
//            <listitem>
//                  <quantity>1</quantity>
//                  <itemdescription>cherry</itemdescription>
//            </listitem>
//       </ingredlist>
//       <preptime>5 minutes</preptime>
// </recipe>
// <listitem><quantity></quantity></listitem>`
// // while(line = read_line()){
//     // line = line.split(' ');
//     // print(parseInt(line[0]) + parseInt(line[1]));
//     inpu = inpu.split('\n').map((i)=>i.trim())

//     var stk = []
//     var src = []
//     var msc = []
//     var inppp = []
//     var flag = 1
//     for(var j = 0; j<inpu.length; j++ ) {
//         line = inpu[j]
//         // console.log(line)
//         var reg = /<\/?\w+>/g
//         var find = line.match(reg)
//         // console.log(line, find)
//         for(var i in find) {
//             if(flag) {
//                 inppp.push(find[i])
//             }
//             if(stk.length) {
//                 var top = stk.pop()
//                 if(top.substring(1) === find[i].substring(2)) {
//                     if(flag) {
//                         src.push(top)
//                     } else {
//                         msc.push(top)
//                     }                    

//                     if(stk.length == 0)  {
//                         flag = 0
//                     }                                       
//                 } else {
//                     stk.push(top)
//                     stk.push(find[i])
//                 }
//             } else {
//                 stk.push(find[i])                                
//             }
//         }

//     }

//     msc = msc.reverse()
//     for(var ii in inppp) {
//         if(!inppp.ii.match(/<\/\w+>/)){

//         }
//     }
//     console.log(msc.reverse(), inppp)
// // }

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

var input = `4 4 10
 1 0 0 1
1 1 0 1
0 1 1 1
0 0 1 1
`;
var input_array = "";

// process.stdin.on('data', function (data) {
//     input += data;
// });

// process.stdin.on('end', function () {
input_array = input.split("\n");
var nLine = 0;


var line = input_array[nLine++].trim();
var input_arrays = line.split(' ');
var a = +input_arrays[0];
var b = +input_arrays[1];
var c = +input_arrays[2];
console.log(a, b, c)
var inpu = [], n = 0
var i, j
for (i = 0; i < a; i++) {
    inpu[i] = []
}

for (i = 0; i < a; i++) {
    for (j = 0; j < b; j++) {
        inpu[i][j] = 0
    }
}


while (nLine < input_array.length) {
    line = input_array[nLine++].trim();
    if (line === '') {
        continue;
    }
    input_arrays = line.split(' ');
    for (var i = 0; i < b; i++) {
        inpu[n][i] = parseInt(input_arrays[i])
    }
    n ++
}

console.log(inpu)

var cur  = {x: 0, y: 0, p:c}
if()



// });

