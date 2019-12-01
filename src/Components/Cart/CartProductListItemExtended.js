import React, {Component} from 'react';
import './CartProductListItemExtended.css'
import ProductQuantity from '../Quantity/ProductQuantity'

class CartProductListItemExtended extends Component {

    render () {
        const {
            productsCount,
            product,
            removeProductFromCart,
            changeProductQuantity

        } = this.props
        return (
            <div className="cart-product-list-item-description">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="col-lg-9">
                        <p className="cart-extended-name">
                            <span> {product.name} </span> 
                        </p>
                        <p className="cart-extended-price">
                            Price for one item: <span className="bold">$ {product.price} </span> 
                        </p>
                        <p className="cart-extended-count">
                            Selected quantity: <span className="bold"> {productsCount} </span>  
                        </p>
                        <ProductQuantity
                            productsCount={productsCount}
                            onDecrementClick={()=>changeProductQuantity(product.id,productsCount-1)}
                            onIncrementClick={()=>changeProductQuantity(product.id,productsCount+1)}
                        />

                        <p className="cart-extended-sum">
                            Sum for this item: <span className="bold sum-price">$ {(product.price * productsCount)} </span> 
                        </p>
                        <button onClick={() => removeProductFromCart(product.id)}>Delete Product</button>
                    </div>
                </div>
            </div>
        )
    }    
}



export default CartProductListItemExtended

