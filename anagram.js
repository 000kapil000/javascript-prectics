const isAnagram=function(s,t){
    // return s.split("").sort().join("")===t.split("").sort().join("")  (this is poor solution)
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

if(map.size>0)return false
return true
}


s="anagram";
t="nagaram"
console.log(isAnagram(s,t));
