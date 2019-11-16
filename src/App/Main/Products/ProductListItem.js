import React from 'react'
import './ProductListItem.css'

const ProductListItem = (props) => {
    console.log(props)
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="product-title">{props.name}</div>
            <div className="product-description">{props.description}</div>
            <div className="product-features">Type: {props.type}</div>
            <div className="product-features">Capacity: {props.capacity} Gb</div>
            <div className="product-price">Price : {props.price} $</div>
            <button className="btn btn-add-to-cart">Add to cart</button>

        </div>
    )
}

export default ProductListItem
