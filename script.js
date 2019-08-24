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
    deleteTodo: function(){
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        toDoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
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
        for(var i = 0; i < toDoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todo = toDoList.todos[i];
            
            var todoTextWithCompletion = '';
            if(todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};