import React from 'react';
import './App.css';
import Navbar from './components/layout/Narbar'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Counter/>
    </div>
  );
}

export default App;
