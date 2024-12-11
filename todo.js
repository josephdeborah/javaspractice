let toDo = ["code", "buy latest design of car " ,"buy a new mac"]
let input = prompt("what will you like to do")
let newInput;
input = input.toLowerCase()

while (input.includes("quit") === false) {
      input = input.toLowerCase()
      if (input.includes("new") === true) {
        newInput = prompt("enter your new to do")
        toDo.push(newInput)
        alert(`you are adding ${newInput} to your todo list`)
        listOut()
        } else if (input.includes("list") === true) {
         listOut()
        }else if(input.includes("delete") === true){
                 delete4 = prompt("Enter the  number of the item you want to delete")
                 delete4 = Number(delete4)
                deleteFunc() 
        }
      input = prompt("what will you like to do")
            
}
         console.log("you quit the app");



        function listOut(){
          let toDoSave = toDo.forEach((value,index)=>{
            let addIndex = index+1
            
            console.log(`${addIndex} : ${value}`);
            
            
          })
        
        }
        listOut()

        function deleteFunc(){
          let deleteNum = delete4-1;
          console.log("you are deleting  " + toDo[`${deleteNum}`]);
          console.log( delete toDo[`${deleteNum}`])

        }



