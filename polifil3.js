Array.prototype.myReduce=function(cb,initialvalue){
    var accumulater=initialvalue;
    for (let i = 0; i < this.length; i++) {
     accumulater=accumulater?cb(accumulater,this[i],i,this):this[i];        
    }
    return accumulater;
}


const num=[1,2,3,4,5,6,]

const newfil=num.myReduce((accumulater,curr,i,arr)=>{
return accumulater+curr;
},0)
console.log(newfil);