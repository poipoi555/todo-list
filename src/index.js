import './style.css';
import { setupEventListeners } from './domHandler';

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let projects = JSON.parse(localStorage.getItem('projects')) || [];

function emptyTodos() {
    todos = [];
}

function addNewTodo(todo) {
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function emptyProjects() {
    projects = [];
}

function addNewProject(proj) {
    projects.push(proj);
    localStorage.setItem('projects', JSON.stringify(projects));
}

function toDo(name, description, dueDate, project, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
}


document.addEventListener("DOMContentLoaded", setupEventListeners);



export { todos, toDo, emptyTodos, addNewTodo, projects, emptyProjects, addNewProject };
