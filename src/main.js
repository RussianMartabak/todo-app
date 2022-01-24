import "./styles.css";
import * as elementFactory from './elementFactory.js';

const projectModal = elementFactory.projectModal();
const currentDate = new Date();
const projects = [...document.body.querySelectorAll('.project')];



document.body.appendChild(projectModal);
document.body.appendChild(elementFactory.projectBox('Vanilla Project', currentDate));
document.body.appendChild(elementFactory.emptyProjectBox());


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
    console.log(projectModalTextInput.value);
    console.log(projectModalDateInput.value);
}

//validate function for both modals, pass in field id as argument
