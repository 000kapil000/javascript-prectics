// function shuffleArr(data) {
//     return data.map(function(a) {
//         return { value: a, random: Math.random() };
//       }).sort(function(a, b) {
//         return a.random - b.random;
//       }).map(function(d) {
//         return d.value;
//       });
//   }
  
//   const arr = [1, 2, 3, 4, 5, 6, 7];
  
//   const a1 = shuffleArr(arr);
//   const a2 = shuffleArr(arr);
//   const a3 = shuffleArr(arr);
//   const a4 = shuffleArr(arr);
  
//   console.log(a1, a2, a3, a4);
  





// function shuffelArr(data) {

//     return data.map(function(a){
//         return {value:a,random:Math.random()}
//        }).sort(function(a,b) {
//         return a.random-b.random
//     }).map(function(d){
//            return d.value
//          }) 
       
// }


// const arr=[1,2,3,4,5,6,7]

// const a1= shuffelArr(arr)
// const a2= shuffelArr(arr)
// const a3= shuffelArr(arr)
// const a4= shuffelArr(arr)

// console.log(a1,a2,a3,a4);





// return data.map(function(a){
//     return {value:a,randdom:Math.random()}
//    }).map(function(d){
//        return d.value
//      }) .sort(function(a,b) {
//     return a.random-b.random
// })



// let array = data.slice(); // Make a copy of the original array

// for (let i = array.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [array[i], array[j]] = [array[j], array[i]]; // Swap elements
// }

// return array;

// console.log(Math.floor(Math.random()*4+1));


function printArr(arr) {
    // return data.map((element)=>(
    //       Math.floor(element)
    // ))
    let data=arr.length
    for(let i=0; i<data;i++){
        // console.log(i);
       if (data[i]) {
        
       }
    }

}

const arrNum=[2,4,6,7,8,4,1,3,4,6,89,6,5,3,2,34,6,7,4,45,3,34]
console.log(printArr(arrNum));
console.log(arrNum.length);


const str= thisis
console.log( typeof str);