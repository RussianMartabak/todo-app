import "./styles.css";
import * as elementFactory from './elementFactory.js';
import {project} from "./project.js";
import * as dataManager from "./dataManager.js";
import { parseISO } from "date-fns";

const projectModal = elementFactory.projectModal();
const currentDate = new Date();
let localData = localStorage.getItem('projects');



document.body.appendChild(projectModal);

document.body.appendChild(elementFactory.emptyProjectBox());
refreshDisplay();


//the logic for project modal
const openProjectModal = document.querySelector('#open-project-modal');
const projectModalButton = document.querySelector('#project-add');
const projectModalDateInput = document.querySelector('#project-date-input');
const projectModalTextInput = document.querySelector('#project-text-input');

openProjectModal.addEventListener('click', openProjectModalHandler);
projectModalButton.addEventListener('click', submitProjectModal);

function openProjectModalHandler(e) {
    projectModal.style.cssText = 'display: block';
}

function submitProjectModal(e) {
    if (!validate([projectModalDateInput, projectModalTextInput])) {
        alert('not filled yet');
    } else {
        //add new project object to data
        console.log('date input ' + projectModalDateInput.value);
        let newProjectDate = new Date(projectModalDateInput.value);
        console.log(newProjectDate);
        let newProject = project(projectModalTextInput.value, newProjectDate);
        
        dataManager.addToStorage(newProject);
        //close modal
        console.log(dataManager.localData);
        projectModal.style.cssText = 'display: none';
        projectModalTextInput.value = '';
        projectModalDateInput.value = '';
        //load the data to html
        refreshDisplay();
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
    if (JSON.parse(localStorage.getItem('projects'))) {
        removeAll('.project');
        let emptyProject = document.querySelector('.empty-project');
        //load projects from localstorage
        JSON.parse(localStorage.getItem('projects')).forEach((e, index) => {
            let newProject = elementFactory.projectBox(index, e.title, parseISO(e.dueDate), e.tasks);
            document.body.insertBefore(newProject, emptyProject);
        })
    }
    
}

function removeAll(elementClass) {
    let items = document.querySelectorAll(elementClass);
    console.log(items);
    if (items.length !== 0) items.forEach(e => {
            console.log(e);
            e.remove();
        });

}