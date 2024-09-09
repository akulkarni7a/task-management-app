import React, { useState, useRef } from 'react';
import './AddTaskForm.css';

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dateInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && details.trim() && dueDate) {
      const newTask = {
        title: title.trim(),
        details: details.trim(),
        dueDate: new Date(dueDate).toISOString().split('T')[0],
      };
      onAddTask(newTask);
      setTitle('');
      setDetails('');
      setDueDate('');
    } else {
      alert('Please fill all fields');
    }
  };

  const handleDateClick = () => {
    dateInputRef.current.showPicker();
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
      <div className="date-input-wrapper" onClick={handleDateClick}>
        <input
          type="date"
          ref={dateInputRef}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
