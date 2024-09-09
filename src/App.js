import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './App.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'To Do' }]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <AddTaskForm onAddTask={addTask} />
      <div className="task-lists">
        <TaskList 
          title="To Do" 
          tasks={tasks.filter(task => task.status === 'To Do')}
          onUpdateStatus={updateTaskStatus}
        />
        <TaskList 
          title="Done" 
          tasks={tasks.filter(task => task.status === 'Done')}
          onUpdateStatus={updateTaskStatus}
        />
      </div>
    </div>
  );
}

export default App;
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    // TODO: Implement input validation and date parsing
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'To Do' }]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <AddTaskForm onAddTask={addTask} />
      <div className="columns">
        <TaskList 
          title="To Do" 
          tasks={tasks.filter(task => task.status !== 'Done')}
          onUpdateStatus={updateTaskStatus}
        />
        <TaskList 
          title="Done" 
          tasks={tasks.filter(task => task.status === 'Done')}
          onUpdateStatus={updateTaskStatus}
        />
      </div>
    </div>
  );
}

export default App;

