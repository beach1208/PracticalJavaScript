let todos = ['item1','item2','item3'];

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