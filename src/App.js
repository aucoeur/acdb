import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import FilteredItemList from './components/FilteredItemList/FilteredItemList';
import data from './data/NH-fossils.json';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact 
          path = "/" 
          render = { (props) => <FilteredItemList {...props} items={data} />} 
        />
        <Route path="/about" component= {About} />
      </div>
    </Router>
  );
}

export default App;
