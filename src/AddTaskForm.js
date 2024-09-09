import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Large block of code for input validation and date parsing
    // This will be a target for future refactoring
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }

    if (details.trim() === '') {
      alert('Details are required');
      return;
    }

    if (dueDate.trim() === '') {
      alert('Due date is required');
      return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dueDate)) {
      alert('Invalid date format. Please use YYYY-MM-DD');
      return;
    }

    const parsedDate = new Date(dueDate);
    if (isNaN(parsedDate.getTime())) {
      alert('Invalid date');
      return;
    }

    const currentDate = new Date();
    if (parsedDate < currentDate) {
      alert('Due date cannot be in the past');
      return;
    }

    // If all validations pass, add the task
    onAddTask({ title, details, dueDate: parsedDate.toISOString() });

    // Clear form fields
    setTitle('');
    setDetails('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;

