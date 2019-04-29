import React, {Component} from 'react'
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
      <CartItem index={index}
        imgSrc={item.imgSrc}
        price={item.price}>
      </CartItem>
    )
  }

  renderItemsCount() {
    const postfix = this.state.itemsCount > 1 ? 'items' : 'item'
    return `${this.state.itemsCount} ${postfix}`
  }

  renderTotal() {
    if(this.state.itemsCount > 0)
    return (
      <div>
        <i></i>
        <div>
          <span>Total:</span>
          <span>$14.00</span>
        </div>
        <div>Empty Cart</div>
      </div>
    )
  }

  render() {
    return (
        <div className="cart">
          <div className="cart__title">Shopping Cart</div>
          <small>{this.renderItemsCount()}</small>
          {this.props.items.map(this.eachItem)}
          {this.renderTotal()}
        </div>
    );
  }
}

export default Cart