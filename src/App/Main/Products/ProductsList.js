import React from 'react'
import ProductListItem from './ProductListItem'

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                <div className="col-lg-6">
                <ProductListItem
                        name="iPhone 11"
                        description="This is iPhone 11"
                        capacity="64"
                        type="phone"
                        price="500"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone 10"
                        description="This is iPhone 10"
                        capacity="256"
                        type="phone"
                        price="1500"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        capacity="128"
                        type="phone"
                        price="1000"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 8"
                        description="This is iPhone 8"
                        capacity="64"
                        type="phone"
                        price="500"
                    />

                </div>
            </div>


        </div>
    )
}

export default ProductsList
