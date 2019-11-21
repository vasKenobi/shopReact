import React from 'react'
import {keys} from 'lodash'
import products,{getProductsMap} from './../Products/products'
import CartTotal from '../../../Components/Cart/CartTotal'


const CartPage = ({
    productsInCart,
    productsMap=getProductsMap(products)
}) => {
    return (
        <div>
            <h1 className="page-title">Cart</h1>
                <div className="cart text-center">
                    {
                        keys(productsInCart).map((productId)=>(
                            <div key={productId}>{productsMap[productId].name} : {productsInCart[productId]} :{productsMap[productId].price}</div>
                        ))
                    }           
                    <CartTotal
                        productsInCart={productsInCart}
                    />
                    
                </div>
        </div>
    )
}

export default CartPage
