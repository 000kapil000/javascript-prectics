// que1 : truncate the test 

// write the program called truncate that check the length of a given string- str and if it surpass a specified maximum length maxlegth , it replace the end of the string with ellips chereacter "..." so that the length matches the max lenght 

// input: str= "subscribe to roadsidecodder"  maxlength=9
// output: "subscribe..."

function truncate(str,maxlength){
    if (str.length>maxlength) {
        return str.slice(0,maxlength)+"..."
    }else return str
}
const str= "subscribe to roadsidecodder"  
const maxlength=9;
console.log(truncate(str,maxlength));