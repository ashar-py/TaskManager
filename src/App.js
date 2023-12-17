import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import EmptyState from './EmptyState';
import './App.css';

const LOCAL_STORAGE_KEY = 'my-tasks';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTasks || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (updatedTask, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const [showAddForm, setShowAddForm] = useState(false);
  const toggleAddForm = () => setShowAddForm(!showAddForm);

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
        <button onClick={toggleAddForm}>
          {showAddForm ? 'Close Form' : 'Add Task'}
        </button>
      </header>
      {showAddForm && <TaskForm addTask={addTask} onClose={toggleAddForm} />}
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          editTask={editTask}
          deleteTask={deleteTask}
          handleCompletion={handleTaskCompletion}
        />
      ) : (
        <EmptyState onClick={toggleAddForm} />
      )}
    </div>
  );
}

export default App;
