const str1='world  with the wall'
const str2='rmesha'

// console.log`hello this${str1} how are you ${str2}`;
console.log(str1.length);

console.log(str1.charAt(3));
//access cherectr with the index no. 


str1.replace("w","b");
// replace, replace the frist inctence of cheracter or word 

str1.replaceAll("w","b");
// replaceall, replace the all inctence of cheracter or word 

const newstr=str1.concat(" is very beautiful") // joint both string 
console.log(newstr);

const friststr="    this si not even   "
friststr.trim(); //remove white space from begning and from last but not from between of cheracter


//searching 
friststr.indexOf("s");// search the index of word as well as character too 
const stri="this si frist ever you see this "
console.log(stri.substring(13,-1));
console.log(stri.slice(-13,-1));

console.log(stri.includes("frist"));//it gives true if cheracter is present in that string 

console.log(stri.split(" ")); //split every cheracter
console.log(stri.split("e"));//remove e from the srtirng gives array 

const arr=["apple","banana"]
console.log(arr.join(" "));