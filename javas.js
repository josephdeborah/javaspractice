let age = prompt("Enter your age ")
age = Number(age)
if( age < 0 ){
    console.log("Error")
}else if( Number.isInteger(Math.sqrt(age))){
    console.log("perfect square")
}else if( age === 21 ){
    console.log("Happy 21 birthday")
}else if( age % 2 !== 0){
    console.log("your age is odd")
}else{
    console.log("your age is even")
}



