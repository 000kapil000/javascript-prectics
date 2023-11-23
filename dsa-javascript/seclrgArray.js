function getSecondLargest(arr){
let second=arr[0];
let large=arr[0];
for(let i=0; i<arr.length; i++){
   if (arr[i]>large) {
       second=large
       large=arr[i];
} 
else if (arr[i]>second) {
    second=arr[i]
}  
}
return second 
}

arr=[2,3,4,1,6,8,78,9,0,34,2,1,6,7,9, 9,33]

console.log(getSecondLargest(arr));

