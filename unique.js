const arr=[1,2,3,4,5,6,5,3,2,1,7,8];

const uniq=arr.reduce((acc, curr)=>{
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
},[])
console.log(uniq);


//with use of set 

// const arrr = [1, 2, 3, 1, 2, 3];

// const set = new Set(arrr);

// const uniqueArr = Array.from(set);

// console.log(uniqueArr); // [1, 2, 3]