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
        if (item.quantityRemaining > 0) {
            this.props.addItemToCart(item)
            //this.props.removeItemFromInventory(item)
        }
    }

    eachItem(item, index) {
        if (item.category == this.props.category) {
          const isDisabled = this.props.cart.items[index] &&
              this.props.cart.items[index].count == item.quantityRemaining

          return (
              <Item key={index}
                    id={index}
                    itemName={item.itemName}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    quantityRemaining={item.quantityRemaining}
                    clickHandler={this.addItem}
                    disabled={isDisabled}
              >
              </Item>
          )
        }
    }

    render() {
        return (
            <div className="inventory">
                {this.props.inventory.items.map(this.eachItem)}
            </div>
        );
    }
}

const mapStateToProps = state => ({inventory: state.inventoryReducer, cart: state.cartReducer})
const mapDispatchToProps = {addItemToCart, removeItemFromInventory}

export default connect(mapStateToProps,mapDispatchToProps)(Inventory)
