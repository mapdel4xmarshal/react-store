import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Item from '../inventory-item/Item'
import {removeItemFromInventory, addItemToCart} from '../../actions'
import './Inventory.css'

class Inventory extends Component {
    constructor(props) {
        super(props)
        this.eachItem = this.eachItem.bind(this)
        this.addItem = this.addItem.bind(this)
        console.log(this.props)
    }

    addItem(item) {
        /* this.props.dispatch(addItemToCart(item))
         this.props.dispatch(removeItemFromInventory(item))*/
        if (item.quantityRemaining > 0) {
            this.props.actions.addItemToCart(item)
            this.props.actions.removeItemFromInventory(item)
        }
    }

    eachItem(item, index) {
        if (item.category == this.props.category)
            return (
                <Item key={index}
                      id={index}
                      itemName={item.itemName}
                      imgSrc={item.imgSrc}
                      price={item.price}
                      quantityRemaining={item.quantityRemaining}
                      clickHandler={this.addItem}
                >
                </Item>
            )
    }

    render() {
        return (
            <div className="inventory">
                {this.props.inventory.items.map(this.eachItem)}
            </div>
        );
    }
}

export default connect(state => ({
        inventory: state.inventoryReducer
    }),
    dispatch => ({
        actions: bindActionCreators({removeItemFromInventory, addItemToCart}, dispatch)
    }))(Inventory)
