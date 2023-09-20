import React, { useState, useEffect } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]); // tasks as empty array
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { text: taskInput, id: Date.now() };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTaskInput('');

      // Store tasks in local storage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  return (
    <div className='task-list-container'>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            {index + 1}. {task.text} {/* Display task number */}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
