import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';
import CartItem from '../cart-item/CartItem'
import './Cart.css'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsCount: 1
    }
  }

  eachItem(item, index) {
    return (
      <CSSTransition
          key={index}
          classNames="cart-item"
          timeout={{enter: 500, exit: 300}}>
        <CartItem index={index}
                  key={index}
                  imgSrc={require('../../assets/images/' + item.imgSrc)}
                  price={item.price}>
        </CartItem>
      </CSSTransition>
    )
  }

  renderItemsCount() {
    const postfix = this.state.itemsCount > 1 ? 'items' : 'item'
    return `${this.state.itemsCount} ${postfix}`
  }

  renderTotal() {
    if (this.state.itemsCount > 0)
      return (
          <div className="cart__summary">
            <span className="cart__total">Total: $14.00</span>
            <span className="cart__empty animate">Empty Cart</span>
            <div className="cart_confirm animate">Confirm Purchase</div>
          </div>
      )
  }

  render() {
    return (
        <div className="cart">
          <div className="cart__title">Shopping Cart</div>
          <small>{this.renderItemsCount()}</small>
          <TransitionGroup>
            {this.props.cart.items.map(this.eachItem)}
          </TransitionGroup>
          {this.renderTotal()}
        </div>
    );
  }
}

export default connect(state => ({
  cart: state.cartReducer,
}))(Cart)
