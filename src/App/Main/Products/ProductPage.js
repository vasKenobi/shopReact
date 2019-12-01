import React from 'react'
import products, { getProductsMap } from './products'

const ProductPage = ({
    match,
    productsMap = getProductsMap(products)
}) => {
    console.log(match)
    return (
        <div>
            <h1 className="page-title">{productsMap[match.params.productId].name} </h1>
        </div>
    )
}

export default ProductPage
