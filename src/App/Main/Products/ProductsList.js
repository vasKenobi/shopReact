import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductsList = ({
    addProductToCart,
    productsLikeState,
    removeLike,
    addLike

}) => {

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
                            id={id}
                            name={name}
                            description={description}
                            capacity={capacity}
                            type={type}
                            price={price}
                            image={image}
                            addProductToCart={addProductToCart}
                            isLiked={productsLikeState[id]}
                            removeLike={removeLike}
							addLike={addLike}

                        />

                        </div> 
                    ))
                }

            </div>


        </div>
    )
}

export default ProductsList
