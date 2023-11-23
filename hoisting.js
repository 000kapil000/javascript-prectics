// scop()
// console.log(x);

// function scop(){
//     console.log("this is hoisting");
// }

// var x= 5
x= 20
var fun= function(){
    x=33
    console.log(x);
}

fun()

var x=10;

function sco(){
    var x= 8
    console.log(x);
}

sco()
console.log(x);