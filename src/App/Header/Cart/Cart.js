import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import './cart.css'
import products,{getProductsMap} from '../../Main/Products/products'
import CartTotal from '../../../Components/Cart/CartTotal'





const Cart = ({
    productsInCart,
    productsMap = getProductsMap(products)
}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId)=>(
                    <div key={productId}>{productsMap[productId].name} : {productsInCart[productId]}</div>
                ))
            }

            <CartTotal
                productsInCart={productsInCart}
            />

            <Link to="/cart">Show cart</Link>


        </div>
    )
}


export default Cart
