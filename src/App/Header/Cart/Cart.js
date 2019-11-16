import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import products from '../../Main/Products/products'

const productsMap = products.reduce((map,product)=>({
    ...map,
    [product.id]:product,
}),{})

console.log(products)
console.log(productsMap)


const Cart = ({
    productsInCart
}) => {
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId)=>(
                    <div key={productId}>{productsMap[productId].name} : {productsInCart[productId]}</div>
                ))
            }

            <div>
                Total : {
                    keys(productsInCart).reduce((total,productId)=>(
                        total + (productsInCart[productId] * productsMap[productId].price)
                    ),0)
                } $
            </div>


        </div>
    )
}


export default Cart
