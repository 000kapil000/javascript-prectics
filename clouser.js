// var names="this is global scope"

// function local(){
//     console.log("name",names);
// }

// local()

// function makefun(){
//     var nam="mozela";
//     function displaynam(){
//         console.log(nam);
//     }
//     return displaynam;
// }
// makefun()

function foo() {
    console.log("This is foo");
    bar();
  }
  
  function bar() {
    console.log("This is bar");
  }
  
  foo();