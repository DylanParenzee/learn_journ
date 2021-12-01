

// let todo = prompt('What would you like to do?');
// while (!todo ) {
//     todo = prompt("Please let me know what you would like to do")
//     break;
// }

// let list = [];

// if (todo === "quit") {
//     console.log("You quit")

// }



// else if (todo === "new") {
//     let listItems = prompt("What would you like to add to add to your list?");
//     list += listItems;
//     while(listItems)





// }

// else if (todo === "list") {
//     console.log(list.indexOf)


// }

let input = prompt("What would you like to do?");
const todos = ["collect eggs", "mow the lawn"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("*******")
        for (let i = 0; i < todos.length; i += 1) {
            console.log(`${i}:${todos[i]}`)
        }
        console.log("*******")
    }
    
    else if (input === "new") {
        const newTodo = prompt("Okay, what would you like to add to your list?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if (input === "delete") {
        const index = parseInt(prompt("What is the index of the item you want to delete?"));
        
        const deleted = todos.splice(index, 1);
        console.log(`Okay deleted ${deleted}`)
       
    }
   
   input = prompt("What would you like to do?")
}
console.log("You quit")


