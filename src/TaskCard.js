import React from 'react';
import { calculateDaysRemaining } from './utils/dateUtils';

function TaskCard({ task, onUpdateStatus }) {
  const toggleStatus = () => {
    const newStatus = task.status === 'To Do' ? 'Done' : 'To Do';
    onUpdateStatus(task.id, newStatus);
  };

  const daysRemaining = calculateDaysRemaining(task.dueDate);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
  };

  return (
    <div className="task-card" draggable onDragStart={handleDragStart}>
      <h3>{task.title}</h3>
      <p>{task.details}</p>
      <p>Due: {task.dueDate}</p>
      <p>Days Remaining: {daysRemaining}</p>
      <p>Status: {task.status}</p>
      <button onClick={toggleStatus}>
        {task.status === 'To Do' ? 'Mark as Done' : 'Mark as To Do'}
      </button>
    </div>
  );
}

export default TaskCard;

