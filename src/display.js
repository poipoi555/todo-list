

function displayTodos(todos) {
    if (todos.length === 0) {
        alert("You have not created any to-dos.");
    }

    const todoList = document.querySelector(".todos");
    todoList.innerHTML = "";

    todos.forEach((currTodo) => {
        const todo = document.createElement("div");
        todo.classList.add("todo");

        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = "Name: " + currTodo.name;
        todo.appendChild(name);

        const desc = document.createElement("div");
        desc.classList.add("description");
        desc.textContent = "Description: " + currTodo.description;
        todo.appendChild(desc);

        const dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        dueDate.textContent = "Due Date: " + currTodo.dueDate;
        todo.appendChild(dueDate);

        const currentDate = new Date();
        const numMsLeft = new Date(currTodo.dueDate) - currentDate;
        const numDaysLeft = Math.ceil(numMsLeft / (1000 * 60 * 60 * 24)); 
        const daysLeft = document.createElement("div");
        daysLeft.classList.add("daysLeft");
        daysLeft.textContent = "Number of days to due date: " + numDaysLeft;
        todo.appendChild(daysLeft);

        const proj = document.createElement("div");
        proj.classList.add("project");
        proj.textContent = "Project: " + currTodo.project;
        todo.appendChild(proj);

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.textContent = "Priority: " + currTodo.priority;
        if (currTodo.priority == 1) {
            priority.classList.add("prio-1");
        } else if (currTodo.priority == 2) {
            priority.classList.add("prio-2");
        } else if (currTodo.priority == 3) {
            priority.classList.add("prio-3");
        } else if (currTodo.priority == 4) {
            priority.classList.add("prio-4");
        } else {
            priority.classList.add("prio-5");
        }
        todo.appendChild(priority);

        todoList.appendChild(todo);
    });

}


function updateTodoDisplay(updatedTodos) {
    const todoList = document.querySelector(".todos");
    todoList.innerHTML = "";

    updatedTodos.forEach((currTodo) => {
        const todo = document.createElement("div");
        todo.classList.add("todo");

        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = currTodo.name;
        todo.appendChild(name);

        const desc = document.createElement("div");
        desc.classList.add("description");
        desc.textContent = currTodo.description;
        todo.appendChild(desc);

        const dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        dueDate.textContent = currTodo.dueDate;
        todo.appendChild(dueDate);

        const proj = document.createElement("div");
        proj.classList.add("project");
        proj.textContent = currTodo.project;
        todo.appendChild(proj);

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.textContent = currTodo.priority;
        if (priority.textContent == 1) {
            priority.classList.add("prio-1");
        } else if (priority.textContent == 2) {
            priority.classList.add("prio-2");
        } else if (priority.textContent == 3) {
            priority.classList.add("prio-3");
        } else if (priority.textContent == 4) {
            priority.classList.add("prio-4");
        } else {
            priority.classList.add("prio-5");
        }
        todo.appendChild(priority);

        todoList.appendChild(todo);
    });
}



const filterTodos = (arr, filter = "") => {
    if (arr.length > 1) {
        arr = arr.filter((todo) => todo.project === filter);
        return sortTodos(arr);
    }
    else {
        return arr;
    }
};


const sortTodos = (arr) => {
    return arr.sort((a, b) => {
        aDate = new Date(a.dueDate);
        bDate = new Date(b.dueDate);
        if (aDate > bDate) {
            return 1;
        }
        else if (aDate < bDate) {
            return -1;
        }
        else {
            return 0;
        }
    });
}


export { displayTodos, updateTodoDisplay, filterTodos };