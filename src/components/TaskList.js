import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask, handleCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          editTask={editTask}
          deleteTask={deleteTask}
          handleCompletion={handleCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;
