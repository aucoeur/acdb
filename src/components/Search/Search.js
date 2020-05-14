import React from 'react';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import './Search.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
        <div className="search">
          <div>
            <IconContext.Provider value={{ color:"#FFFFFF",size: "1.75em", className: "global-class-name" }}>
              <FaSearch className="fa-search"/>
            </IconContext.Provider>
          </div>
            <input 
                type = "text"
                placeholder="Search"
                value={ this.props.filterText } 
                onChange= { this.handleFilterTextChange } 
            />
        </div>
        );
    }
}

export default SearchBar;