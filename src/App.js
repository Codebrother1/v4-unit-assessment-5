import Nav from './Components/Nav'
import routes from './routes';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav/>
      {routes}
    </div>
  )
};

export default App;
