import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from '../inventory-item/Item'
import { addItem } from '../../actions'
import './Inventory.css'

class Inventory extends Component {
    constructor(props){
        super(props)
        this.eachItem = this.eachItem.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        this.props.dispatch(addItem(item))
    }

    eachItem(item, index) {
        return (
            <Item key={index}
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
                {this.props.items.map(this.eachItem)}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addItem, dispatch) }
}
export default connect(mapDispatchToProps)(Inventory)
