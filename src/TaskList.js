import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ title, tasks, onUpdateStatus }) {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map(task => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onUpdateStatus={onUpdateStatus} 
        />
      ))}
    </div>
  );
}

export default TaskList;
import TaskCard from './TaskCard';

function TaskList({ title, tasks, onUpdateStatus }) {
  // TODO: Implement drag and drop functionality
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    // TODO: Implement drop logic
  };

  return (
    <div 
      className="task-list"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>
      {tasks.map(task => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onUpdateStatus={onUpdateStatus} 
        />
      ))}
    </div>
  );
}

export default TaskList;

