const localData = JSON.parse(localStorage.getItem('projects'));

function addToStorage(item) {
    if (!JSON.parse(localStorage.getItem('projects'))) {
        let items = [item];
        localStorage.setItem('projects', JSON.stringify(items));
    } else {
        let items = JSON.parse(localStorage.getItem('projects'));
        
        items.push(item);
        localStorage.setItem('projects', JSON.stringify(items));
        
    }
}

function removeFromStorage(index) {
    let projects = getLocalData();
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
}

function getLocalData() {
    return JSON.parse(localStorage.getItem('projects'));
}

function getObjectFromStorage(index) {
    let items = getLocalData();
    return items[index];
}

function addTasktoProject(projectIndex, taskObject) {
    let projectArray = getLocalData();
    projectArray[projectIndex].tasks.push(taskObject);
    localStorage.setItem('projects', JSON.stringify(projectArray));
}

function updateTaskInStorage(projectIndex, taskIndex, boolean) {
    let projectArray = getLocalData()
    projectArray[projectIndex].tasks[taskIndex].completion = boolean;
    localStorage.setItem('projects', JSON.stringify(projectArray));
}
export {localData, addToStorage, removeFromStorage, getLocalData, getObjectFromStorage, addTasktoProject, updateTaskInStorage};  