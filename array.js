
function isEven(even){
    if(even%2 ===0){
        return true
    }else{
        return false
    }
}
isEven(4)
isEven(21)
isEven(68)
isEven(333)


let toDoList = [ "read" , "sweep" ,"wash", "sleep"]

toDoList.pop()
toDoList.unshift("cook")
toDoList[1]="clean"
console.log(toDoList)
console.log(toDoList.length)



let mixedArray =["code" ,5 ,true]
mixedArray.slice(1)
// mixedArray[0]="data"
console.log(mixedArray)


function factorial(num){
    const factors =[]
    for(let i=0 ; i<=num ; i++ ){
        if(num % i ===0){
            factors.push(i) 
        }
    }
    console.log(factors)
    return factors
}

factorial(5)
factorial(2)
factorial(10)
factorial(0)



let array1 = ["apple","cat" ,"banana" ,"dog","elephant"];
let newArray = array1.map(greatThanFour)
function greatThanFour( value, index ){
  if (value.length > 4) {
    return value
  }
  
}
 console.log(newArray);




 let array2 =   ["apple","cat" ,"banana" ,"dog","elephant" , "apple"]
 console.log(array2.lastIndexOf("apple"));
 



