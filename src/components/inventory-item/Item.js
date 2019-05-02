import React, {Component} from 'react'
import './Item.css';

class Item extends Component {
    constructor(props){
        super(props)
        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick() {
        const { clickHandler, ...itemProps } = this.props;
        this.props.clickHandler(itemProps)
    }

    render() {
        return (
            <div className={`item animate ${this.props.quantityRemaining > 0? '' : 'item--empty'}`}>
                <img className="item__image" src={require(`${'../../assets/images/'}${this.props.imgSrc}`)}
                     alt={this.props.imgName}/>
                <span className="item__name" title={this.props.itemName}>{this.props.itemName}</span>
                <div className="item__info">
                    <div className="item__stock-info">
                        ${Math.ceil(this.props.price)}
                        <span className="item__quantity">{this.props.quantityRemaining} In Stock</span>
                    </div>
                    <div className="item__action animate" onClick={this._handleClick}>Add to Cart</div>
                </div>
            </div>
        );
    }
}

export default Item
