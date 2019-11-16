import React,{Component} from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'

class ProductListItem extends Component {
    state = {
        productsCount:1,
    }

    onIncrementClick () {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount - 1
        }))
    }



    render() {
        const {
            name,
            description,
            capacity,
            type,
            price,
            image,
            addProductToCart,
        } = this.props

        console.log(this)

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
                     <button 
                        onClick={this.onDecrementClick}
                        disabled={this.state.productsCount <= 1}
                        >-</button>
                     <input type="text" value={this.state.productsCount} readOnly/>
                     <button 
                        onClick={()=>this.onIncrementClick()}
                        disabled={this.state.productsCount >= 10}
                        >+</button>
                </div>
                <button 
                    className="btn btn-add-to-cart"
                    onClick={()=>addProductToCart(price,this.state.productsCount)}
                    >Add to cart</button>

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
