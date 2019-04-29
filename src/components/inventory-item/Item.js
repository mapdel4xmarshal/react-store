import React, { Component } from 'react'
import './Item.css';

class Item extends Component {
  render() {
    return (
        <div className="item animate">
          <img className="item__image" src={this.props.imgSrc} alt={this.props.imgName} />
          <span className="item__name">{this.props.itemName}</span>
          <div className="item__info">
            <div className="item__stock-info">
              ${Math.ceil(this.props.price)}
              <span className="item__quantity">{this.props.quantityRemaining} In Stock</span>
            </div>
            <div className="item__action">Add to Cart</div>
          </div>
        </div>
    );
  }
}

export default Item