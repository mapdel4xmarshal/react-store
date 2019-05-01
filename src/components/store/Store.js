import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
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
      <TransitionGroup>
        <CSSTransition
            key="1"
            classNames="Store"
            appear={true}
            timeout={{enter: 500, exit: 300}}>
          <div>
            <header className="store__header">
              <span className="store__navigation">Fruit</span>
            </header>
            <div className="store__main">
              <Inventory items={this.state.items}></Inventory>
              <Cart></Cart>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Store
