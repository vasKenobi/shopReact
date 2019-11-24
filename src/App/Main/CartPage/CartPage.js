import React from 'react'

import CartTotal from '../../../Components/Cart/CartTotal'

import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productsInCart,
    removeProductFromCart,
}) => {
    return (
        <div>
            <h1 className="page-title">Cart</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart = {removeProductFromCart}
            />     
            <CartTotal
                productsInCart={productsInCart}
            />

        </div>
    )
}

export default CartPage
