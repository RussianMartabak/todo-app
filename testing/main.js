const projects = [...document.querySelectorAll('.project')];

if (projects.length !== 0){
    projects.forEach(e => e.querySelector('.project-add-task').addEventListener('click', addTaskHandler));
}
console.log(projects);

const textField = document.createElement('input');
textField.setAttribute('type', 'text');
textField.classList.add('project-text-field');

function addTaskHandler(ev) {
    let target =  ev.target;
    target.parentElement.replaceChild(textField, target);
    
}