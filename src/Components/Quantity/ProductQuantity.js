import React from 'react'

 const ProductQuantity = ({
     onDecrementClick,
     onIncrementClick,
     productsCount
 }) => {
     return (
        <div className="product-quantity">
            <button 
                onClick={()=>onDecrementClick()}
                disabled={productsCount <= 1}
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
