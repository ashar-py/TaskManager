function EmptyState({ onClick }) {
  return (
    <div className="empty-state">
      <h1>No tasks yet!</h1>
      <p>Get started by adding your first task.</p>
      <button onClick={onClick}>Add Task</button>
    </div>
  );
}

export default EmptyState;
