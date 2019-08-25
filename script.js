let toDoList = {
    todos: [],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            // set Object propery name as todoText then set value as function parameter todoText
            completed: false
        });
    },
    changeTodos: function(position,todoText){
        // this.todos[position] = newValue;
        // Current todoText prperty get and set new todoText
        this.todos[position].todoText = todoText;
    },
    deleteTodos: function(position){
        this.todos.splice(position,1);
    },
    toggleCompleted: function(position){
        let todo = this.todos[position];  
        // grabbing and referencing specific todo
        todo.completed = !todo.completed;
        // first get true or false of completed and change to the opposite of it
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        // Get number of completed todos
        // for(let i = 0; i < totalTodos; i++){
        //     if(this.todos[i].completed === true){
        //         completedTodos++;
        //     }
        // }
        this.todos.forEach(function(todo) {
            if(todo.completed === true){
                completedTodos++;
            }
        });

        // Case 1: If everything is true, make evenything false
        this.todos.forEach(function(todo){
            if(completedTodos == totalTodos){
                todo.completed = false;
            }else {
             todo.completed = true;
             }
        })
        
    }
};


const handlers = {
    addTodo: function(){
        let addTodoTextInput = document.getElementById('addTodoTextInput')
        toDoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function(){
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        toDoList.changeTodos(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(position){
        toDoList.deleteTodos(position);
        view.displayTodos();
    },
    toggleCompleted: function(){
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        view.displayTodos();
    },
    toggleAll: function() {
        toDoList.toggleAll();
        view.displayTodos();
    }
}

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        toDoList.todos.forEach(function(todo,position){
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if(todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListners: function(){
        
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click',function(event){

    var elementClicked = event.target;

    if(elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
    }
})
    }
};

view.setUpEventListners();