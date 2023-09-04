Array.prototype.mymap= function(cb){
    let temp=[];
    for(let i=0;i<this.length ; i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}


const arr=[1,2,3,4,5,6]
const newarr=arr.mymap((num,i,arr)=>{ 
    return num*num
})
console.log(newarr);