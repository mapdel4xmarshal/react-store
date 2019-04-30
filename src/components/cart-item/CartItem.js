import React, {Component} from 'react'
import './CartItem.css';

class CartItem extends Component {
  render() {
    return (
        <div className="cart-item" key={this.props.index}>
          <div className="cart-item__container">
            <img className="cart-item__image" src={this.props.imgSrc}/>
            <div>
              <span className="cart-item__button animate">–</span>
              <span className="cart-item__count animate">2</span>
              <span className="cart-item__button animate">+</span>
            </div>
          </div>
          <div>
            <span className="cart-item__pricing">@$5each = $10</span>
            <span className="cart-item__delete">Delete</span>
          </div>

        </div>
    );
  }
}

export default CartItem