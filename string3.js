// que3 : Hamming distance
// given two strings x and y return the hamming distance between them 

// input x="hello" y="hwllr"
// output : 2 

// explation 
// (hello)
// (hwllr)

function hammingDist(x,y){
    if (x.length !== y.length){
        throw new Error("string must be of same length m")
    }
    let distance =0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !==y[i]) {
            distance++
        }
        
    }
   return distance
}
console.log(hammingDist("hello","hwllr"));
       

// variation 2: given two integer x and y return hamming distance between thair bits.


function hammingDist(x,y){
    x=x.toString(2)
    y=y.toString(2)
    if (x.length < y.length){
        while (x.length!==y.length) x="0"+x
    }else{
        while(x.length!==y.length) y="0"+y
    }
    let distance =0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !==y[i]) {
            distance++
        }
        
    }
   return distance
}
console.log(hammingDist(2,9));