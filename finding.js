let array = [1, 2,3, 4, 5];
let sum2 =array.reduce(sum)

function sum(total,value) {
    
    return total+value;
    
}

// redo usi
let array1 = ["apple","cat" ,"banana" ,"dog","elephant"];
array1.forEach((num12)=> {
    if (num12.length > 4) {
        return num12
    }
})

let array2 = [2,3,4]
array2.forEach((num13)=>{
  
    return Math.pow(num13 , 2);
})


let array3 = [1, "hello" , true, "world", 42]
 for (let index = 0; index < array3.length; index++) {
    let newArray = []
    if(isNaN((array3[index]))){
        newArray.push(array3[index])
        console.log(newArray);
        
    }
    
 }
 
 const number = [5, 12, 8, 130, 44]
 for (let i=0; i< number.length; i++) {
    

   return  Math.max(number[i])
     
        
 }



let array6 =["apple", "banana", "cherry"]
array6.forEach((string2)=> {
        console.log(string2.toUpperCase());
})





let even = [1, 2, 3, 4, 5, 6]
even.forEach((num)=> {
    if (num % 2===0) {
        console.log(num)
    }
})