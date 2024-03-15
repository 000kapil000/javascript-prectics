var names="this is global scope"

function local(){
    console.log("name",names);
}

const apn =()=>{
  console.log(this.names);
}
apn()
local()
function makefun(){
    var nam="mozela";
    function displaynam(){
        console.log( "this is line 12",nam);
    }
  
    return displaynam 
}
makefun()



function createCounter() {
  let count = 0; // Local variable in the enclosing block (closure scope)

  function increment() {
    count++; // Closure: remembers and updates `count`
    return count;
  }

  return increment; // Return the inner function (the closure)
}

const counter1 = createCounter();
const counter2 = createCounter(); // Creates a separate closure with its own `count`

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (different closure with its own `count`)
console.log(counter2()); // 2




// function foo() {
//     console.log("This is foo");
//     bar();
//   } 
//   function bar() {
//     console.log("This is bar");
//   }
  
//   foo();
function countOccurrences(arr) {
    let obj = {};
    
    arr.forEach(ele => {
      if (obj[ele]) {
        obj[ele]++;
      } else {
        obj[ele] = 1;
      }
    });
  
    // Filter out elements with counts less than 1
    // for (let key in obj) {
    //   if (obj[key] === 1) {
    //     delete obj[key];
    //   }
    // }
  
    return obj;
  }
  
  const inputArray = [1, 2, 3, 4, 2, 3, 4];
  const result = countOccurrences(inputArray);
  console.log(result); // Output: { 1: 1, 2: 2, 3: 2, 4: 2 }
  

  let x=1.1+2.3
  let y=
  c=3.4
  console.log(x===c);

  const array = [1, 2, 3, 4, 5];

// Create a new array that contains elements from index 1 (inclusive) to index 3 (exclusive)
const newArray = array.slice(1, 3);
console.log(array);
console.log(newArray);
// newArray is [2, 3], array remains [1, 2, 3, 4, 5]
