import React from 'react';

function TaskItem({ task, index, editTask, deleteTask, handleCompletion }) {
  const checkboxStyle = {
    opacity: task.completed ? 0.5 : 1,
  };

  return (
    <li className="task-item">
      <div className="checkbox" style={checkboxStyle}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCompletion(index)}
        />
      </div>
      <span onClick={() => editTask(task, index)}>{task.title}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TaskItem;
