let num = -9;
while( num < 19){
    console.log(num);
    num++
}

for( ; num < 19 ;){
    console.log(num);
    num++
}


let num2 = 12 ;
 
while( num2 < 40){
   
    console.log(num2)
  
    num2+=2
}

for( ; num2 < 40 ;){
   
    console.log(num2)
  
    num2+=2
}



let num3 = 301

while(num3 < 333){
   
            console.log(num3)
      
        num3+=2
}
for(; num3 < 333 ;){
   
    console.log(num3)

num3+=2
}

let num4 = 6

while(num4 < 50){
    if( num4 % 3 ===0 && num4 % 5 ===0 ){
        console.log(num4)
    }
    num4++
}
for(;num4 < 50;){
    if( num4 % 3 ===0 && num4 % 5 ===0 ){
        console.log(num4)
    }
    num4++
}

function even(){
    for(let i =1 ; i < 10 ; i++){
        if(i % 2 ===0){

            console.log(i)
        }
    }
}


even()



let even2 = function(){
    even()
}

even2()



function test(x){
    return x*2;
    console.log(x);
    return x/2;
}
test(40);
let array = [ "blue", "green" , "yellow"];
console.log(array[1]);


let array2 = [10, 20, 30, 40, 50];
console.log(array2.length);






let array3 = [ "milk", "bread", "eggs"];
array3.push("butter");
array3.shift();
console.log(array3);

let array4 = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
array4[2]="hump day";
console.log(array4);


let func=()=>{
    console.log("dance")
}
func()



const array5 = new Array( "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday" )
console.log(array5)
console.log(array5.sort())
console.log(array5[array5.length-4])
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

// document.getElementById("demo").innerHTML = text;
function myFunc(value){
    console.log(value);
    
}

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

fruits1.forEach(myFunction);


function myFunction(value) {
    console.log(value)
} 



const food =["eggs" , "rice" ]
food.forEach(myFunc)
console.log(food.at(1));
delete food[1]
console.log(food);


function myFunc(index, value, array){
    console.log(value)
    console.log(index);
    console.log(array)
    
}
const food3 = []
food3[0]="eggs"
console.log(food3);


let array8 = ["orange", "banana", "apple" ]
// console.log(array6.copyWithin(2,0));

let array7 =[1, 2, 3, 4, 5 ]
array7.find(myFunc4)
console.log(array7.findLast(x => x <4));
console.log(array7.findLastIndex(x => x <4));


console.log(array7.findIndex(myFunc4));

function myFunc4(index, value, array){
    console.log(value < 5)
}
console.log( array7.flatMap(x =>[x, x*4]));


let remove = (array8.splice(1,2, "pineapple","nuts" ))
console.log(remove);
console.log(array8);

let array1 =[
    "Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack",
    "Karen", "Leo", "Mona", "Nate", "Olivia", "Paul", "Quincy", "Rachel", "Sam", "Tina",
    "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane", "Aaron", "Beth", "Clara", "Derek",
    "Elise", "Finn", "Gina", "Holly", "Isaac", "Joan", "Kyle","Laura"
  ];
  let add = 1
for (let index = 0; index < array1.length; index++) {
    if (array1[index]==="Rachel") {
       add+=index
        console.log("Rachel is on the list " + add );
        break;

        
    }
    
}


