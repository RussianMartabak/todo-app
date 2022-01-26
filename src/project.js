const project = (title, dueDate) => {
    let tasks = [];
    const add = (task) => {
        tasks.push(task)
    };

    return {title, dueDate, tasks, add}; 
}

const task = (desc, completion) => {
    return {desc, completion};
}
export {project, task};