import React, { Component } from 'react'
import Item from '../inventory-item/Item'
import './Inventory.css'

class Inventory extends Component {

  eachItem(item, index) {
    return (
        <Item key={index}
              itemName={item.itemName}
              imgSrc={item.imgSrc}
              price={item.price}
              quantityRemaining={item.quantityRemaining}>
        </Item>
    )
  }

  render() {
    return (
        <div className="inventory">
          {this.props.items.map(this.eachItem)}
        </div>
    );
  }
}

export default Inventory