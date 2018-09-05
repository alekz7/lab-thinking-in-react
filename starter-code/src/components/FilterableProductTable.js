import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import products from "../data/data.json";

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      data: products,
    };
    this.handleBuscar = this.handleBuscar.bind(this);
  }
  async handleBuscar(producto){
    if (producto == undefined) return;
    var filterData = await products.data.filter(function (obj) {
      return obj.name.toLowerCase().includes(producto.toLowerCase());
    });
    this.setState({
      data: filterData,
    });
    console.log(producto);
    console.log(this.state.data);
  }
  render(){
    return(
      <div>
        <SearchBar data={this.state.data} buscar={this.handleBuscar}/>
        <ProductTable data={this.state.data}/>
      </div>
    );
  }
}

export default FilterableProductTable;
