import React from 'react'

const CartProductListItemExtended = ({
    productsCount,
    product
}) => {
    return (
        <div>{product.name} !!!!! : {productsCount}</div>
    )
}

export default CartProductListItemExtended
