import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path = "/" component= { ItemList } />
      </div>
    </Router>
  );
}

export default App;
