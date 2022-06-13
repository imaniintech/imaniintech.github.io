
document.querySelector('#submit').onclick = () => { //when submit attribute is entered into text box, and user clicks add, 
    const input = document.querySelector('#input-box').value; //the outcome for the input will select
    document.querySelector('#input-box').value = "";  
   taskToAdd(input);
}

//to add task into the input once submit button is clicked
taskToAdd = (input) => {
    let taskItem = document.createElement('div');
    taskItem.classList.add('to-do-item');
    taskItem.innerText = input;
    taskItem.onclick = (task) => {
        taskThatsComplete(task);
    }
// creates a button that will show task as completed
    let firstButton = document.createElement('button');
    firstButton.setAttribute('type', 'button');
    firstButton.classList.add('complete-button');
    firstButton.innerText = 'COMPLETED';
    taskItem.appendChild(firstButton);
    document.querySelector('#to-do-list').appendChild(taskItem);
}

// creates button that can click to move item once completed
const taskThatsComplete = (task) => {
    let divForDoneTask = task.currentTarget;
    divForDoneTask.setAttribute('class', 'done-item');
    divForDoneTask.style.backgroundColor = '#ED6495';
    document.querySelector('#completed').appendChild(divForDoneTask);
    let secondButton = divForDoneTask.querySelector('.complete-button');
    secondButton.innerText = 'REMOVE';
    divForDoneTask.onclick = (task) => {
        task.currentTarget.remove();
    }
}