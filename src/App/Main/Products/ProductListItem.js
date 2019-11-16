import React from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'

const ProductListItem = ({
    name,
    description = "No description ...",
    capacity,
    price,
    type,
    image,
}) => {
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt=""/>
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} Gb</div>
            <div className="product-price">Price : {price} $</div>
            <div className="product-quantity">
                 <button>-</button>
                 <input type="text" value="1"/>
                 <button>+</button>
            </div>
            <button className="btn btn-add-to-cart">Add to cart</button>

        </div>
    )
}


ProductListItem.propTypes = {
    image:PropTypes.string,
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    capacity:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,

}




export default ProductListItem
