const localData = JSON.parse(localStorage.getItem('projects'));

function addToStorage(item) {
    if (!JSON.parse(localStorage.getItem('projects'))) {
        let items = [item];
        localStorage.setItem('projects', JSON.stringify(items));
    } else {
        let items = JSON.parse(localStorage.getItem('projects'));
        console.log(`from dataManager ${items}`);
        items.push(item);
        localStorage.setItem('projects', JSON.stringify(items));
        
    }
}
export {localData, addToStorage}; 