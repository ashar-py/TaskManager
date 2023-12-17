import React, { useState } from 'react';

function TaskForm({ addTask, onClose }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask({ title: newTask, completed: false });
      setNewTask('');
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input class="field"
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button class="field" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
