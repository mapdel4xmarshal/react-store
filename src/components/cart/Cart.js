import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';
import CartItem from '../cart-item/CartItem'
import './Cart.css'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.eachItem = this.eachItem.bind(this)
    }

    eachItem(id) {
        const item = this.props.cart.items[id]
        return (
            <CSSTransition
                key={id}
                classNames="cart-item"
                timeout={{enter: 500, exit: 300}}>
                <CartItem id={id}
                          key={id}
                          count={item.count}
                          amount={item.amount}
                          imgSrc={require('../../assets/images/' + item.imgSrc)}
                          price={item.price}>
                </CartItem>
            </CSSTransition>
        )
    }

    renderItemsCount() {
        const postfix = this.props.cart.itemsCount > 1 ? 'items' : 'item'
        return `${this.props.cart.itemsCount} ${postfix}`
    }

    renderTotal() {
        if (this.props.cart.itemsCount > 0)
            return (
                <div className="cart__summary">
                    <span className="cart__total">Total: ${this.props.cart.totalAmount}</span>
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
                    {Object.keys(this.props.cart.items).map(this.eachItem)}
                </TransitionGroup>
                {this.renderTotal()}
            </div>
        );
    }
}

export default connect(state => ({
    cart: state.cartReducer,
}))(Cart)
