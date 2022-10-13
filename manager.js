const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


let tasks = ["study", "journal", "cooking"]

const prompt = require('prompt-sync')({ sigint : true });
let tasks = ["work", "book", "cooking"]

const deb = parseFloat(prompt("Welcome to your task manager, Press:"+" "
+" 1. to see all your tasks"+" "
+" 2. to add a task"+" "
+" 3. to delete a task"+ " "
+" 4. to mark a task as done"+ " "
+" 5. to Exit the task manager: "))

let menu = 
` Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done
5. to Exit the task manager`

console.log(menu)
let task
if(menu > 5 || menu <= 0)
{console.log("entrez un chiffre entre 1 et 5")
}
 else if( menu ===1){console.log("see all your tasks")


 }
else if( menu === 2){console.log("add a task")

    
}
else if( menu === 3){console.log("delete a task")
    
}
else if(  menu === 4) {console.log("mark a task as done")
    
}
else if (  menu === 5){
    
    return deb
    
}

const showtasks = () => {
    console.log(tasks)
}
const addToList = () => {
    var p = prompt("Witch task would like to add ");
    tasks.push(p);
    console.log("you added " + p);
    console.log(tasks);
}

const removeFromlist = () => {
    
    var p = prompt("Witch task would like to delete ");
    for( var i = tasks.length-1; i--;){
    if ( tasks[i] === p){
         tasks.splice(i, 1);
    }
    console.log(tasks);
    }
}