// que: Kth missing postitive Number
// given an array arr of positive integer sorted in a strictly increasing order, and an integer k. Return the kth positive integer that is missing from this array.

// input : arr=[2,3,4,7,11] k=5 --->>   output : 9
// explation  : the missing positive integers are [1,5,6,8,9,10,12,13,......]
// 5th missing positive integer is 9

function findPositive(arr,k){
    let count=0;
    for(let i=0;i< arr.length ; i++){
        if(arr[i]<= k+count){
            count++
        }
    }
    return k+count
}

const arr=[2,3,4,7,11]
const k=5
console.log(findPositive(arr,k));