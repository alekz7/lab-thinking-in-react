import React, { Component } from 'react';
import Search from './Search';
import Data from './Data';

class Contenedor extends Component {
  render(){
    return(
      <div>
        <Search />
        <Data />
      </div>
    );
  }
}

export default Contenedor;
