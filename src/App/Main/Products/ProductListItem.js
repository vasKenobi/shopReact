import React,{Component} from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'

class ProductListItem extends Component {
    render() {
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="product-title">{this.props.name}</div>
                <div className="product-description">{this.props.description}</div>
                <div className="product-features">Type: {this.props.type}</div>
                <div className="product-features">Capacity: {this.props.capacity} Gb</div>
                <div className="product-price">Price : {this.props.price} $</div>
                <div className="product-quantity">
                     <button>-</button>
                     <input type="text" value="1" readOnly/>
                     <button>+</button>
                </div>
                <button className="btn btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}



ProductListItem.propTypes = {
    image:PropTypes.string,
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    capacity:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,

}

ProductListItem.defaultProps = {
    description:"No description ..."
}



export default ProductListItem
