import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Dashboard from './pages/Dashboard';
import Shipping from './pages/Shipping';
import Inventory from './pages/Inventory';
import Channel from './pages/Channel';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/dasboard' Component={Dashboard}/>
        <Route path='/inventory' Component={Inventory}/>
        <Route path='/' Component={Orders}/>
        <Route path='/shipping' Component={Shipping}/>
        <Route path='/channel' Component={Channel}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;



















/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header>*/