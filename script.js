document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <div class="buttons">
                    <button class="edit">Edit</button>
                    <button class="complete">Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;

            const deleteButton = li.querySelector('.delete');
            const editButton = li.querySelector('.edit');

            deleteButton.addEventListener('click', function() {
                if (!li.classList.contains('completed')) {
                    taskList.removeChild(li);
                }
            });

            editButton.addEventListener('click', function() {
                if (!li.classList.contains('completed')) {
                    const newText = prompt('Edit task:', taskText);
                    if (newText !== null) {
                        li.querySelector('span').textContent = newText;
                    }
                }
            });

            const completeButton = li.querySelector('.complete');
            completeButton.addEventListener('click', function() {
                li.classList.toggle('completed');
                if (li.classList.contains('completed')) {
                    completeButton.style.backgroundColor = 'green';
                    completeButton.style.textDecoration = 'line-through';
                    deleteButton.disabled = true;
                    editButton.disabled = true;
                } else {
                    completeButton.style.backgroundColor = '#2196F3';
                    completeButton.style.textDecoration = 'none';
                    deleteButton.disabled = false;
                    editButton.disabled = false;
                }
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    });
});