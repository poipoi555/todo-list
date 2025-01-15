import { addNewProject } from './index.js';

function createProject(newProj) {
    const projList = document.querySelectorAll("#project-dropdown");
    const newOption = document.createElement("option");
    newOption.classList.add("new-project");
    newOption.textContent = newProj;
    newOption.value = newProj;

    projList.forEach((pList) => {
        pList.appendChild(newOption);
        addNewProject(newProj);
    });
}

export { createProject };