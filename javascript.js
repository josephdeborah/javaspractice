// let greet = "hell*o" 
/*let i = 3
while( i < 5){
   i++
   if( i = 0){
    console.log("false")
   }else{
    console.log(i)
   }
}*/


// let person = {
//     name :"debby",
//     age:30,
//     city:"newyork"
// }
// let text = ""
// for( let x in person ){
//     text += person[x] + " ";
//     console.log(text)
// }
// let count = 11;
// while (count > 10) {
//     console.log(count);
//     count +=2;
// }
// let grade = prompt("enter your score")
// if(grade >= 70){
// console.log("A")
// }else if(grade < 70 && grade >= 60 ){
//     console.log("B")
// } else if(grade < 60 && grade >= 50 ){
//         console.log("C")
// }else if(grade < 50  && grade >= 40){
//     console.log("D")
// }else{
//     console.log("F")
// }


// let text = prompt("enter your age")
// if(text < 0){
//    alert(text)
// }


// let age = prompt("enter your age")
// age = Number(age)
// switch (age){
//    case  13:
//       console.log("dance");
//       break;
//       default:
//          console.log("trf")

// }

// let colors = {
//    red : 300,

// }





//let x = 5
//do{
  // console.log(1)
   //x++
//}while(x < 8);


function person(first , last , age , eye){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
}

const object = new person("debby" , "joseph" , "12" , "red")
object.nationality="nigeria"
delete(object.nationality)
console.log(object);

//  