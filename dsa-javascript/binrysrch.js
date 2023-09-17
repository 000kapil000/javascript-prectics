// que : impliment binary search 
// given an array of inteers nums which is sorted in assending or decending ordeer and an integer target 
// write a function to search target in nums, if tyarget exists , then return it's index 
// otherwise return -1 you must write and algorithem with 0(n) runtime complexity

// imput nums= [4,5,6,7,0,1,2]  , target =0 output: 4
// imput nums= [4,5,6,7,0,1,2]  , target =3 output: -1

function BinarySearch(nums,target){
    let start = 0;
    let end =nums.length-1;
   while (start <= end) {
    let middle =Math.floor((start+end)/2);
    if (nums[middle] === target) {
        return middle
    }else if (nums[middle] < target) {
        start =middle +1
    }else{
        end=middle-1
    }
   } 
return -1
}
const nums = [4,5,6,7,0,1,22,4,55,12,2];
nums.sort(function(a,b){
    return a-b;
});
console.log(nums);
const target = 55;
console.log(BinarySearch(nums,target));

