Array.prototype.myfil=function(cb){
    let temp=[];
    for(let i=0;i<this.length ;i++){
        if (cb(this[i],i,this))
        temp.push(this[i]);
    }
    return temp;
}

const num=[1,2,3,4,54,56,]

const newfil=num.myfil((num,i,arr)=>{
return num<2;
})
console.log(newfil);