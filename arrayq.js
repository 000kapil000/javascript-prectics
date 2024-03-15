const arr=[34,"test",45,"demo","test1",87,9,22,"demo2"]

const filterdarr= arr.filter((ele)=>{
    if (typeof(ele)=="number") {
        return true
    }
})


console.log(filterdarr);