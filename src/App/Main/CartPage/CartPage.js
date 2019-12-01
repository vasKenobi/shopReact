import React from 'react'
import {connect} from 'react-redux'
import CartTotal from '../../../Components/Cart/CartTotal'

import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity

}) => {
    return (
        <div>
            <h1 className="page-title">Cart</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart = {removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />     
            <CartTotal
                productsInCart={productsInCart}
            />

        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart:state.productsInCart
})

export default connect(
    mapStateToProps
)(CartPage)
