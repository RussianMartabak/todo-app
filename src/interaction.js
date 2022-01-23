const interaction = (() => {
    const initTaskHandler = (projects) => {

        projects.forEach(e => e.querySelector('.project-add-task').addEventListener('click', addTaskHandler));
        console.log(projects);
    
    }
    function addTaskHandler(ev) {
        let target =  ev.target;
        target.replace();
        
    }
})
export default interaction;