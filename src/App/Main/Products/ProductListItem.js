import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import './ProductListItem.css'
import ProductQuantity from '../../../Components/Quantity/ProductQuantity';

class ProductListItem extends Component {
    state = {
        productsCount:1,
    }

    onIncrementClick = () => {
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
            id={id},
            isLiked,
        } = this.props


        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div>
                <button>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>

                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">Price : {price} $</div>
                <ProductQuantity
                    productsCount={this.state.productsCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount={1}
                />

                <button 
                    className="btn btn-add-to-cart"
                    onClick={()=>addProductToCart(id, this.state.productsCount)}>Add to cart</button>

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



const mapStateToProps = (state,props) => ({
    isLiked: state[props.id]
})

export default connect(
    mapStateToProps
)(ProductListItem)

