import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import React from 'react';
function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Form />
      </div>
    </div>
  );
}

export default App;
