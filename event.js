// Event  propagation in javascript 


// const div =document.querySelector('div');
// const form =document.querySelector('form')
// const button =document.querySelector('button');

// div.addEventListener("click", fun);

// button.addEventListener("click", fun);

// form.addEventListener("click", fun);


// function fun(event){
//     alert("current target "+event.currentTarget.tagName);

// }



const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

// Add a click event listener to a common ancestor (in this case, the document)
document.addEventListener("click", fun);

function fun(event) {
  // Check if the clicked element is the div, button, or form
  if (event.target === div) {
    alert("Current target: " + event.target.tagName);
  } else if (event.target === button) {
    alert("Button clicked");
  } else if (event.target === form) {
    alert("Form clicked");
  }
}
