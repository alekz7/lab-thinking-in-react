import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
// import Categoria from './Categoria';

class ProductTable extends Component {
  render(){
    console.log("rendereando tabla");
    console.log("***",this.props.data.data)
    return(
      <div>
        <Table dataSource={this.props.data.data}>
          <Column
            title="Name"
            dataIndex="name"
            key="name"
          />
          <Column
            title="Price"
            dataIndex="price"
            key="price"
          />
        </Table>
      </div>
    );
  }
}

export default ProductTable;
