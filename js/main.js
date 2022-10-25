const body = document.body;

const form = body.querySelector('.form');
const formInput = body.querySelector('.form__input');
const box = body.querySelector('.container');
const modal = body.querySelector('#modal')
const closeBtn = body.querySelector('.close')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const tas = formInput.value;

    // let task = tas.replace(/[,.?$%*&+/!@#\s]+/g, " ").trim();
    let task = tas.replace(/[\"\'~`!@#$*%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '').replace(/\s+/ig, ' ').trim();

    let str = task.split("").join('');

    if (str.length === 0) {  // if(!str) // success
        alert("Qaytadan urinib ko'ring ?");
        return;
    }

    if (str.length <= 3) {
        modal.style.display = 'block';
        return
    };



    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskTextDiv = document.createElement('div');
    // taskTextDiv.textContent = str;
    taskTextDiv.className = 'task__text';

    const taskText = document.createElement('input');
    taskText.className = 'task__input';
    taskText.type = 'text';
    taskText.value = str;
    taskText.setAttribute('readonly', 'readonly');

    const taskEdit = document.createElement('button');
    taskEdit.textContent = 'Edit';
    taskEdit.className = 'task_edit';

    taskEdit.addEventListener('click', () => {
        if (taskEdit.textContent.toLowerCase() == 'edit') {
            taskText.removeAttribute("readonly");
            taskText.focus(); ``
            taskEdit.textContent = 'Save';
        } else {
            taskText.setAttribute('readonly', 'readonly');
            taskEdit.textContent = 'edit';

        }
    })

    // taskEdit.addEventListener('click',)

    const taskDelete = document.createElement('button');
    taskDelete.textContent = 'Delete';
    taskDelete.className = 'task_delete';

    taskDelete.addEventListener('click', () => {
        box.removeChild(taskDiv)
    })

    taskTextDiv.appendChild(taskText)

    taskDiv.append(taskTextDiv, taskEdit, taskDelete);

    box.appendChild(taskDiv)

    formInput.value = "";

})

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', outsideClick);

body.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        location.reload()
    }
};


function closeModal() {
    modal.style.display = 'none';
    location.reload();
}


function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        location.reload();
    }
}

