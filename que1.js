const student=[
    {name:"aman",age:23,marks:40},
    {name:"shivam",age:20,marks:50},
    {name:"kunj",age:19,marks:60},
    {name:"Hansh",age:18,marks:80},
    {name:"kinjal",age:28,marks:90},
    {name:"ramesh",age:16,marks:100},
    {name:"alex",age:22,marks:45},
]
//return name of student in uppercase 
let names=student.map((arr)=>{
    return  arr.name.toLocaleUpperCase();
})
console.log(names);

//return student more then 60 marks
let filtermarks=student.filter((arr)=>{
    return  arr.marks>60;
})
console.log(filtermarks);


//return totel of marks of student 
let reducesum =student.reduce((arr,curr)=>{arr+curr.marks,0})
console.log(reducesum );

//return only name of student who score more then 60

const markname= student.filter((stu)=>stu.marks>60).map((stu)=>stu.name);
console.log(markname);
//return total marks of student with marks grater then 60 after 20 marks
// have been added tothose who score less then 60

const stuwith60= student.map((stu)=>{
    if(stu.marks<60){
        stu.marks+=20;
    }
    return stu
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0)
console.log(stuwith60);