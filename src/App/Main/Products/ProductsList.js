import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
            {
                    products.map(({
                        id,
                        name,
                        description,
                        capacity,
                        price,
                        type,
                        image
                    })=> (
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                            name={name}
                            description={description}
                            capacity={capacity}
                            type={type}
                            price={price}
                            image={image}
                        />

                        </div> 
                    ))
                }

            </div>


        </div>
    )
}

export default ProductsList
