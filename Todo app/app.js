const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);

function addTask(event) {
  event.preventDefault();

  if (taskInput.value !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <input type="checkbox">
      <label>${taskInput.value}</label>
      <button type="button">Delete</button>
    `;
    taskList.appendChild(newTask);

    newTask.querySelector('button').addEventListener('click', deleteTask);
    taskInput.value = '';
  }
}

function deleteTask(event) {
  event.preventDefault();

  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}