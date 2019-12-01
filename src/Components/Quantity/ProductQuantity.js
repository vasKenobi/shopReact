import React from 'react'

 const ProductQuantity = ({
     onDecrementClick,
     onIncrementClick,
     productsCount,
     minCount

 }) => {
     return (
        <div className="product-quantity">
            <button 
                onClick={()=>onDecrementClick()}
                disabled={productsCount <= minCount}
            >-</button>
            <input type="text" value={productsCount} readOnly/>
            <button 
                onClick={()=>onIncrementClick()}
                disabled={productsCount >= 10}
            >+</button>
        </div>
     )
 }

 export default ProductQuantity
