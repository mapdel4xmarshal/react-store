import React, {Component} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';
import CartItem from '../cart-item/CartItem'
import {addItemToInventory, deleteItemFromCart, confirmPurchase, emptyCart, removeItemsFromInventory} from '../../actions'
import './Cart.css'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.confirmPurchase = this.confirmPurchase.bind(this)
        this.eachItem = this.eachItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    confirmPurchase(){
        console.log('confirmPurchase')
        this.props.removeItemsFromInventory(this.props.cart.items)
        this.props.confirmPurchase()
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
                          price={item.price}
                          handleDelete={this.handleDelete}>
                </CartItem>
            </CSSTransition>
        )
    }

    emptyCart() {
        this.props.emptyCart()
    }

    handleDelete(itemId) {
        const item = this.props.cart.items[itemId]
        this.props.deleteItemFromCart(item)
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
const mapDispatchToProps = {addItemToInventory, confirmPurchase, deleteItemFromCart, emptyCart, removeItemsFromInventory}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
