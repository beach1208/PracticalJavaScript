let toDoList = {
    todos: [],
    displayTodos: function() {
    //    if there are no todos, console.log("Your todo list is empty")
    if(this.todos.length === 0){
        console.log("Your todos is empty");
    }
    //  else print todos as normal
      console.log("My todos:");
        for(let i = 0; i < this.todos.length; i++){

            // check if .completed is true print with (x)
            if(this.todos[i].completed === true){
                  console.log('(x)',this.todos[i].todoText);
            }else {
                // else print with ()
                  console.log('( )',this.todos[i].todoText);
            }
            
        }

    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            // set Object propery name as todoText then set value as function parameter todoText
            completed: false
        });
        this.displayTodos();
    },
    changeTodos: function(position,todoText){
        // this.todos[position] = newValue;
        // Current todoText prperty get and set new todoText
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodos: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        let todo = this.todos[position];  
        // grabbing and referencing specific todo
        todo.completed = !todo.completed;
        // first get true or false of completed and change to the opposite of it

        this.displayTodos();
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        // Get number of completed todos
        for(let i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }

        // Case 1: If everything is true, make evenything false
        if(completedTodos == totalTodos){
            for(let i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }else {
            for(let i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};


// It should have a function to display todos
function displayTodos(){
    console.log("My todos:",todos);
}

// // It should hace a function to add todos
function addTodos(todo){
    todos.push(todo);
    displayTodos();
}

// // It should have a function to change todos.
function changeTodos(position,newValue){
    todos[position] = newValue;
    displayTodos();
}

// // It should have a function to delete todos
function deleteTodos(position){
    todos.splice(position,1)
    displayTodos();
}