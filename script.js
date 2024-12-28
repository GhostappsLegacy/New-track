const listNameInput = document.getElementById('listName');
const doneButton = document.getElementById('doneBtn');

listNameInput.addEventListener('input', () => {
    if (listNameInput.value.trim() !== "") {
        doneButton.classList.add('enabled');
        doneButton.disabled = false;
    } else {
        doneButton.classList.remove('enabled');
        doneButton.disabled = true;
    }
});
