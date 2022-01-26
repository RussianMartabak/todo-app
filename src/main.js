import "./styles.css";
import * as elementFactory from './elementFactory.js';
import {project, task} from "./project.js";
import * as dataManager from "./dataManager.js";
import { parseISO } from "date-fns";

const taskModal = elementFactory.taskModal();
const projectModal = elementFactory.projectModal();
const currentDate = new Date();




document.body.appendChild(projectModal);
document.body.appendChild(taskModal);

document.body.appendChild(elementFactory.emptyProjectBox());
refreshDisplay();

//task modal references
let selectedProjectElementIndex;
const taskModalButton = document.querySelector('#task-add');
taskModalButton.addEventListener('click', submitTaskModal);

//the logic for project modal
const openProjectModal = document.querySelector('#open-project-modal');
const projectModalButton = document.querySelector('#project-add');
const projectModalDateInput = document.querySelector('#project-date-input');
const projectModalTextInput = document.querySelector('#project-text-input');

openProjectModal.addEventListener('click', openProjectModalHandler);
projectModalButton.addEventListener('click', submitProjectModal);



function submitProjectModal(e) {
    if (!validate([projectModalDateInput, projectModalTextInput])) {
        alert('not filled yet');
    } else {
        //add new project object to data
        
        let newProjectDate = new Date(projectModalDateInput.value);
        let newProject = project(projectModalTextInput.value, newProjectDate);
        
        dataManager.addToStorage(newProject);
        //close modal
        
        projectModal.style.cssText = 'display: none';
        projectModalTextInput.value = '';
        projectModalDateInput.value = '';
        //load the data to html
        refreshDisplay();
    }
     
}
function submitTaskModal(e) {
    const taskModalTextInput = document.querySelector('#task-text-input');
    if(!validate([taskModalTextInput])) {
        alert('not filled yet');
    } else {
        //make task object 
        let newTask = task(taskModalTextInput.value, false);
        

        //parse the parent object, change and update the localstorage
        dataManager.addTasktoProject(selectedProjectElementIndex, newTask);
        //reset the input
        taskModalTextInput.value = '';
        //refresh display
        refreshDisplay();
        taskModal.style.cssText = 'display: none';
    }
}



//validate function for both modals, pass in field id as argument
function validate(fieldsArray) {
    let validity = true;
    for (let i = 0; i < fieldsArray.length; i++) {
        let form = fieldsArray[i];
        if (form.value === '') {
            validity = false;
            break;
        }
    }
    return validity;
}

function refreshDisplay() {
    if (dataManager.getLocalData()) {
        removeAll('.project');
        let emptyProject = document.querySelector('.empty-project');
        //load projects from localstorage
        dataManager.getLocalData().forEach((e, index) => {
            let newProject = elementFactory.projectBox(index, e.title, parseISO(e.dueDate), e.tasks);
            document.body.insertBefore(newProject, emptyProject);
            console.log(e.tasks);
        })
        //add event listener to all remove button 
        let deleteButtons = document.body.querySelectorAll('.delete');
        deleteButtons.forEach(el => {el.addEventListener('click', removeProject)});
        loadOpenTaskModalEventListener();
    }
    
}

function loadOpenTaskModalEventListener() {
    let openTaskModalButtons = document.querySelectorAll('.project-add-task');
    if (openTaskModalButtons.length === 0) return;
    openTaskModalButtons.forEach(el => el.addEventListener('click', openTaskModalHandler));
}

function openTaskModalHandler(e) {
    taskModal.style.cssText = 'display: block';
    selectedProjectElementIndex = e.target.parentElement.getAttribute('data-index');
    
}

function openProjectModalHandler(e) {
    projectModal.style.cssText = 'display: block';
}

function removeProject(e) {
    let targetProject = e.target.parentElement;
    let index = targetProject.getAttribute('data-index');
    dataManager.removeFromStorage(index);
    refreshDisplay();
}

function removeAll(elementClass) {
    let items = document.querySelectorAll(elementClass);
    console.log(items);
    if (items.length !== 0) items.forEach(e => {
            console.log(e);
            e.remove();
        });

}

