// que :  valid anagram
//  anagram is a word or phase formed by rearranging the latters of a diffrent word or phase . using all the original latter exectly once .


const isAnagram=function(s,t){
    // (this is poor solution)
    // return s.split("").sort().join("")===t.split("").sort().join("") 
if(s.length !== t.length)return false
const map=new Map()
for(const c of s){
    if(map.has(c))map.set(c,map.get(c)+1)
    else map.set(c,1)
}

for (const c of t){
    if(!map.has(c))return false
    map.set(s,map.get(c)-1)
    if(map.get(c)===0)map.delete(c)
}

return true
}


s="anagram";
t="nagaram"
// s="rat";
// t="car"


console.log(isAnagram(s,t));
