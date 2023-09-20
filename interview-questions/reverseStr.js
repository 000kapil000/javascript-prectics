// que:- Given a string , reverse each word in the sentence 

// input :- hello world 
// output:- olleh dlrow 

let str="hello world this is beautifull ";

 let reversed = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

console.log(reversed.join(" "));