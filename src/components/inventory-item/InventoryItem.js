import React, {Component} from 'react'
import './InventoryItem.css';

class InventoryItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.props.disabled) return
        const {clickHandler, ...itemProps} = this.props;
        clickHandler(itemProps)
    }

    render() {
        return (
            <div className={`item animate ${this.props.quantityRemaining > 0 ? '' : 'item--empty'}`}>
                <img className="item__image" src={require(`${'../../assets/images/'}${this.props.imgSrc}`)}
                     alt={this.props.imgName}/>
                <span className="item__name" title={this.props.itemName}>{this.props.itemName}</span>
                <div className="item__info">
                    <div className="item__stock-info">
                        <span>
                            ${Math.floor(this.props.price)}
                            <sup className="item__cent">
                                {(this.props.price.toFixed(2) + "").split(".")[1]}
                            </sup>
                        </span>
                        <span className="item__quantity"
                              title={`${this.props.quantityRemaining} In Stock`}>
                            {this.props.quantityRemaining} In Stock
                        </span>
                    </div>
                    <div className={`item__action animate ${this.props.disabled ? 'item__action--disabled' : ''}`}
                         onClick={this.handleClick}>Add to Cart
                    </div>
                </div>
            </div>
        );
    }
}

export default InventoryItem
