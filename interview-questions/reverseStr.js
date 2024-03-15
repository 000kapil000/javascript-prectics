// que:- Given a string , reverse each word in the sentence 

// input :- hello world 
// output:- olleh dlrow 

let str="hello world this is beautifull ";

 let reversed = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

console.log(reversed.join(" "));
// console.log(str.split(" "));



const numbers = [10, 20, 30, 40];

const result = numbers.find((number) => number > 25);
// Returns 30 because it's the first number in the array greater than 25

// const numbers = [10, 20, 30, 40];

const res = numbers.filter((number) => number > 25);
// Returns [30, 40] because both numbers are greater than 25


console.log(res,"and ",result);

var hero={
    _name:"x",
    getName: function(){ 
        return this._name

    }

}
var heroNamfn=hero.getName;

console.log(heroNamfn());
console.log(hero.getName());
