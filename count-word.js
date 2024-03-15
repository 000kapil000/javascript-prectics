let str="hello world"
function wordCount(str){

    let splitd= str.split("")
    
    let stored={}
    
    splitd.forEach(word=>{
        if(word in stored ){
            stored[word]++
        }else{
            stored[word]=1
        }
    })
    return stored
}
console.log(wordCount(str));

// console.log(str.split(" "));
// function wordCount(str) {
//     let splitd = str.split(" ");
//     let stored = {};
  
//     splitd.forEach((word) => {
//       if (word in stored) {
//         stored[word]++;
//       } else {
//         stored[word] = 1;
//       }
//     });
  
//     return stored;
//   }
  
//   console.log(wordCount("hello world")); // Output: { hello: 1, world: 1 }
  