import { formatDistanceToNow, format } from "date-fns";
import deleteIcon from "./delete.png";


const projectBox = (index, title, duedate, taskList = []) => {
    const element = document.createElement('div');
    element.classList.add('project');
    element.setAttribute('data-index', index);
    let elementTitle = document.createElement('div');
    elementTitle.classList.add('project-title');
    elementTitle.textContent = title;
    element.appendChild(elementTitle);

    let deleteIconHTML = document.createElement('img');
    deleteIconHTML.src = deleteIcon;
    deleteIconHTML.style.cssText = 'position: absolute';
    deleteIconHTML.style.cssText += 'top: 24px; right: 24px';
    deleteIconHTML.classList.add('delete');//to find the delete butoon
    element.appendChild(deleteIconHTML);

    let due = document.createElement('div');
    due.classList.add('project-due');
    let timedistance = formatDistanceToNow(duedate, {addSuffix: true});
    let formattedDate = format(duedate, 'MM/dd/yyyy');
    due.textContent = `Due ${timedistance}. ${formattedDate}`;
    element.appendChild(due);

    if (!taskList.length === 0) taskList.forEach(e => element.appendChild(e));
    
    return element

}

const emptyProjectBox = () => {
    let title = '+ Add a Project';
    const element = document.createElement('div');
    element.classList.add('empty-project');
    let elementTitle = document.createElement('div');
    elementTitle.setAttribute('id', 'open-project-modal');//id for the modal button
    elementTitle.classList.add('project-title');
    elementTitle.textContent = title;
    element.appendChild(elementTitle);

    return element;
}

const createModal = (id) => {
    let modal = document.createElement('div');
    modal.setAttribute('id', id);
    modal.classList.add('modal');
    modal.style.cssText = 'display: none';
    return modal;
}

const projectModal = () => {
    let modal = createModal('project-modal');
    let modalBox = document.createElement('div');
    modalBox.classList.add('modal-box');
    modal.appendChild(modalBox);

    let modalTitle = document.createElement('p');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'Add a Project';
    modalBox.appendChild(modalTitle);

    let textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('placeholder', 'your project name');
    textInput.classList.add('modal-field');
    textInput.setAttribute('id', 'project-text-input');
    modalBox.appendChild(textInput);

    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.classList.add('modal-field');
    dateInput.setAttribute('id', 'project-date-input');//id for date
    modalBox.appendChild(dateInput);

    let modalButton = makeButton('Add', 'project-add');//the id for this button
    modalBox.appendChild(modalButton);

    return modal;
}

const makeButton = (text, id) => {
    const button = document.createElement('div');
    button.classList.add('button');
    button.setAttribute('id', id);
    button.textContent = text;
    return button;

}

export {projectBox, emptyProjectBox, projectModal, makeButton};