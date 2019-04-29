import React, { Component } from 'react'
import Cart from '../cart/Cart'
import Inventory from '../inventory/Inventory'
import './Store.css';
import storeItems from './store_items'

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: storeItems
    }
  }

  render() {
    return (
        <div>
          <header className="store__header">
            <span className="store__navigation">Fruit</span>
          </header>
          <div className="store__main">
            <Inventory items={this.state.items}></Inventory>
            <Cart items={this.state.items}></Cart>
          </div>
        </div>
    );
  }
}

export default Store