// group by a same person name 


const person=[
    {name:"amit",age:22},
    {name:"kapil",age:24},
    {name:"rahul",age:22},
    {name:"dhruv",age:22},
    {name:"amit",age:26},
    {name:"sidd",age:23}
]

const groupof=person.reduce((group,person)=>{
    if (group[person.name]==null) {
        group[person.name]=[]
    }
    group[person.name].push(person)
    return group
},{})


const grouped=Object.groupBy(person,person=>person.name)
console.log("this is groupby method",grouped);

console.log("this is rreduce method",groupof);

