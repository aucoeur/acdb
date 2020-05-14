import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
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
      </div>
    </Router>
  );
}

export default App;
