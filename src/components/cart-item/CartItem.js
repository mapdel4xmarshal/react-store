import React, {Component} from 'react'
import './CartItem.css';

class CartItem extends Component {
    render() {
        return (
            <div className="cart-item" key={this.props.id}>
                <div className="cart-item__container">
                    <img className="cart-item__image" src={this.props.imgSrc} alt={this.props.itemName}/>
                    <div>
                        <div className="cart-item__button animate"
                             onClick={e => this.props.handleRemove(this.props.id)}>–
                        </div>
                        <span className="cart-item__count animate">{this.props.count}</span>
                        <div className="cart-item__button animate"
                             onClick={e => this.props.handleAdd(this.props.id)}>+
                        </div>
                    </div>
                </div>
                <div>
                    <span className="cart-item__pricing">@${this.props.price}each = ${this.props.amount}</span>
                    <span className="cart-item__delete animate"
                          onClick={e => this.props.handleDelete(this.props.id)}>Delete</span>
                </div>
            </div>
        );
    }
}

export default CartItem
