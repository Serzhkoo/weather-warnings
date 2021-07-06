import React from 'react';
import './App.css';
import { Routes } from './routes/Routes';
import { ButtonAppBar } from './forms/LayoutForm';

const App: React.FC = () => {
  return (
    <div>
      <ButtonAppBar/>
      <Routes/>
    </div>
  );
};

export default App;
