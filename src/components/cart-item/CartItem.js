import React, { Component } from 'react'
import './CartItem.css';

class CartItem extends Component {
  render() {
    return (
        <div className="cart-item"
             key={this.props.index}>
          <div>
            {this.props.itemName}
            <img className="cart-item__image" src={this.props.imgSrc} />
          </div>
        </div>
    );
  }
}

export default CartItem