const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor
// console.log(courseInstructor)//Cannot access 'courseInstructor' before initialization

const {courseInstructor} = course
console.log(courseInstructor)//Hitesh

const {courseInstructor : instructor } = course
console.log(instructor)//Hitesh