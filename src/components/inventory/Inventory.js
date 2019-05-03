import React, {Component} from 'react'
import {connect} from 'react-redux'
import InventoryItem from '../inventory-item/InventoryItem'
import {addItemToCart} from '../../actions'
import './Inventory.css'

class Inventory extends Component {
    constructor(props) {
        super(props)
        this.eachItem = this.eachItem.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        if (item.quantityRemaining > 0) {
            this.props.addItemToCart(item)
        }
    }

    eachItem(item, index) {
        if (item.category === this.props.category) {
          const isDisabled = this.props.cart.items[index] &&
              this.props.cart.items[index].count === item.quantityRemaining

          return (
              <InventoryItem key={index}
                             id={index}
                             itemName={item.itemName}
                             imgSrc={item.imgSrc}
                             price={item.price}
                             quantityRemaining={item.quantityRemaining}
                             clickHandler={this.addItem}
                             disabled={isDisabled}
              >
              </InventoryItem>
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
const mapDispatchToProps = {addItemToCart}

export default connect(mapStateToProps,mapDispatchToProps)(Inventory)
