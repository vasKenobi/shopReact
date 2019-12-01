import React from 'react'
import {keys} from 'lodash'
import products, { getProductsMap } from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(products),
    CartItem = CartProductListItem,
    

}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId)=>(
                    <CartItem 
                        product = {productsMap[productId]}
                        productsCount = {productsInCart[productId]}
                        key = {productId}
                        
                    />

                ))
            }
        </div>
    )
}

export default CartProductList
