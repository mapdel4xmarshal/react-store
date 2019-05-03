import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';
import CartItem from '../cart-item/CartItem'
import {
    addItemToCart,
    addItemToInventory,
    confirmPurchase,
    deleteItemFromCart,
    emptyCart,
    removeItemFromCart,
    removeItemsFromInventory
} from '../../actions'
import './Cart.css'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.confirmPurchase = this.confirmPurchase.bind(this)
        this.addItem = this.addItem.bind(this)
        this.eachItem = this.eachItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    addItem(itemId) {
        this.props.addItemToCart(this.props.cart.items[itemId])
    }

    confirmPurchase() {
        this.props.removeItemsFromInventory(this.props.cart.items)
        this.props.confirmPurchase()
    }

    eachItem(itemId) {
        const item = this.props.cart.items[itemId]
        return (
            <CSSTransition
                key={itemId}
                classNames="cart-item"
                timeout={{enter: 500, exit: 300}}>
                <CartItem id={itemId}
                          key={itemId}
                          count={item.count}
                          amount={item.amount}
                          imgSrc={require('../../assets/images/' + item.imgSrc)}
                          price={item.price}
                          handleAdd={this.addItem}
                          handleDelete={this.deleteItem}
                          handleRemove={this.removeItem}>
                </CartItem>
            </CSSTransition>
        )
    }

    deleteItem(itemId) {
        const item = this.props.cart.items[itemId]
        this.props.deleteItemFromCart(item)
    }

    emptyCart() {
        this.props.emptyCart()
    }

    removeItem(itemId) {
        this.props.removeItemFromCart(this.props.cart.items[itemId])
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
                    <span className="cart__empty animate" onClick={this.emptyCart}>Empty Cart</span>
                    <div className="cart_confirm animate" onClick={this.confirmPurchase}>Confirm Purchase</div>
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


const mapStateToProps = state => ({cart: state.cartReducer})
const mapDispatchToProps = {
    addItemToCart,
    addItemToInventory,
    confirmPurchase,
    deleteItemFromCart,
    emptyCart,
    removeItemFromCart,
    removeItemsFromInventory
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
