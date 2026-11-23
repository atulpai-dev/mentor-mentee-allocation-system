function showOptions() {
    document.getElementById('options').classList.remove('hidden');
}

function selectOption(option) {
    document.getElementById('textbox').style.display = 'block';
    document.getElementById('nameInput').placeholder = `Enter ${option}'s name here...`;
    document.getElementById('options').classList.add('hidden');
}

function changeButtonColor() {
    const nameInput = document.getElementById('nameInput').value;
    const okButton = document.getElementById('okButton');

    if (nameInput) {
        okButton.classList.add('active');
    } else {
        okButton.classList.remove('active');
    }
}

function fetchDetails() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Fetching details for ${name}...`);
    } else {
        alert('Please enter a name.');
    }
}
