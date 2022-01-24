const project = (title, dueDate) => {
    let tasks = [];
    function add(task) {
        tasks.push(task)
    };

    return {title, dueDate, tasks, add}; 
}

export {project};