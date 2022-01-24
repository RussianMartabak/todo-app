const localData = JSON.parse(localStorage.getItem('projects'));

function addToStorage(item) {
    if (!localData) {
        let items = [item];
        localStorage.setItem('projects', JSON.stringify(items));
    } else {
        let items = localData;
        console.log(`from dataManager ${items}`);
        items.push(item);
        localStorage.setItem('projects', JSON.stringify(items));
        
    }
}
export {localData, addToStorage}; 