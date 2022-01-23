import { formatDistanceToNow } from "date-fns";


const projectBox = (title, duedate, taskList = []) => {
    const element = document.createElement('div');
    element.classList.add('project');
    let elementTitle = document.createElement('div');
    elementTitle.classList.add('project-title');
    elementTitle.textContent = title;
    element.appendChild(elementTitle);

    let due = document.createElement('div');
    due.classList.add('project-due');
    let timedistance = formatDistanceToNow(duedate, {addSuffix: true});
    due.textContent = `Due ${timedistance}`;
    element.appendChild(due);

    if (!taskList.length === 0) taskList.forEach(e => element.appendChild(e));
    
    return element

}

const emptyProjectBox = () => {
    let title = '+ Add a Project';
    const element = document.createElement('div');
    element.classList.add('project');
    let elementTitle = document.createElement('div');
    elementTitle.setAttribute('id', 'add-project');
    elementTitle.classList.add('project-title');
    elementTitle.textContent = title;
    element.appendChild(elementTitle);

    return element;
}

const createModal = () => {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('display', 'none');
    return modal;
}
export {projectBox, createModal, emptyProjectBox};