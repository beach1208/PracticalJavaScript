let toDoList = {
    todos: [],
    displayTodos: function() {
        console.log("My todos:",this.todos);
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
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};


// It should have a function to display todos
function displayTodos(){
    console.log("My todos:",todos);
}

// It should hace a function to add todos
function addTodos(todo){
    todos.push(todo);
    displayTodos();
}

// It should have a function to change todos.
function changeTodos(position,newValue){
    todos[position] = newValue;
    displayTodos();
}

// It should have a function to delete todos
function deleteTodos(position){
    todos.splice(position,1)
    displayTodos();
}