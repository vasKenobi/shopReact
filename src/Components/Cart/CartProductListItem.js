import React from 'react'

const CartProductListItem = ({
    productsCount,
    product
}) => {
    return (
        <div>{product.name} : {productsCount}</div>
    )
}

export default CartProductListItem
