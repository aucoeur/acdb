import React from 'react';
import ItemList from '../ItemList/ItemList';
import SearchBar from '../Search/Search';

class FilteredItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
    });
  }

  render() {
      return (
          <div>
            <SearchBar
                filterText = {this.state.filterText}
                onFilterTextChange = {this.handleFilterTextChange}  />
            <ItemList
                items = { this.props.items }
                filterText = { this.state.filterText }
            />     
          </div>
      )
  }
}

export default FilteredItemList;