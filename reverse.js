//here the programs to reverse the string

// using  split() and reverse( ) method

// function reversestr(str){
// const res=str.split("")
// res.reverse();
// return res.join("");
// }

// const str="hello , raj "
// const result=reversestr(str)
// console.log(result);



//with the help of for loop

// function reverseser(arg){
// let reverseStr="";
// for(let i=arg.length; i>=0; i--){
//     reverseStr+=arg[i];
// }
// return reverseStr;
// }
// const stri="helllo this is";
// const resp=reverseser(stri)
// console.log(resp);


// with the help of reduce 

// function reverced(str){
//     return  str.split("").reduce((acc,itt)=>itt+acc,"");
    
// }
// const str=" Hello this is striong"
// const result =reverced(str)
// console.log(result);

// without any method 

function reser(str){
 let dummy='';
 for(i=0; i<str.length;i++){
  dummy = str[i]+dummy
 }
 return dummy
}
const str="this is string";
const data=reser(str);
console.log(data);