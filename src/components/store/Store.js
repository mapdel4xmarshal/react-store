import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Cart from '../cart/Cart'
import Inventory from '../inventory/Inventory'
import {connect} from 'react-redux';
import './Store.css';

class Store extends Component {
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
              <Inventory category={"fruit"}></Inventory>
              <Cart></Cart>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default connect(state => ({
  inventory: state.inventoryReducer,
}))(Store)
