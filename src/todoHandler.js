import { todos, toDo, addNewTodo, addNewProject } from './index.js';
import { createProject } from './projectHandler.js';
import { displayTodos } from './display.js';


function createTodo() {
    const popup = document.querySelector(".overlay");

    // get the inputs from the popup
    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#duedate");
    const proj = document.querySelector("#project-dropdown");
    const newProj = document.querySelector("#new-project");
    const priority = document.querySelector("#priority");

    const nVal = name.value.trim();
    const dVal = description.value.trim();
    const dueVal = dueDate.value.trim();
    const projVal = proj.value.trim();
    const newVal = newProj.value.trim();
    const pVal = priority.value.trim();
    let projectType = undefined;

    if (nVal == undefined || dVal == undefined || dueVal == undefined || pVal == undefined || (projVal == undefined && newVal == undefined)) {
        alert("Please fill in all fields!");
        return;
    }
    if (pVal < 1 || pVal > 5) {
        alert("Please choose a valid priority!");
        return;
    }
    if (projVal != "" && newVal != "") {
        alert("Please choose either a new project or an already-existing project!");
        return;
    }

    if (projVal != "") {
        projectType = projVal;
    } else {
        projectType = newVal;
        createProject(newVal);
        addNewProject(newVal);
    }

    const newTodo = new toDo(nVal, dVal, dueVal, projectType, pVal);

    addNewTodo(newTodo);
    displayTodos(todos);
    popup.style.display = "none";

}



export { createTodo };