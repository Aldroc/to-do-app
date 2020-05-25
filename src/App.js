import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TaskForm from './components/form';
import TaskList from './components/taskList';

function App() {
  return (
    <div>
      <Header />
      <TaskList />
      <TaskForm />
    </div>  
  );
}

export default App;
