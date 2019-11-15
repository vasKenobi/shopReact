import React from 'react'
import ProductListItem from './ProductListItem'

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem/>
                </div>
            </div>


        </div>
    )
}

export default ProductsList
