import studentData from "./student.json" with {type:"json"}

let myData=studentData
const courses=myData.courses
for(let i=0;i<courses.length;i++){
    if(courses[i].title==="Math"){
        courses[i].optional=true
    }
    else{
        courses[i].optional=false
    }
}
console.log(myData)