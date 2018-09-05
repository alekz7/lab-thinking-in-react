import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
const Search = Input.Search;

class SearchBar extends Component {
  handleChange(e, value){    
    this.props.buscar(e.target.value || value);
  }
  render(){
    return(
      <div>
      <Search
        placeholder="input search text"
        onChange={this.handleChange.bind(this)}
        onSearch={value => console.log(value)}
        enterButton/>
      </div>
    );
  }
}

export default SearchBar;
