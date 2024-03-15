// let c=8
// let b=9
// console.log(a(c,b));


//  function a(c,b){
//     // console.log("this is a fucntion");
//    return( c+b)
// }




let obj ={
    sname:"amit",
    sage:22,
    saddress:"hopal",
    pritDtails:()=>{
        console.log(this.sname);
    }
}
 let data= obj.pritDtails()

 console.log(data);