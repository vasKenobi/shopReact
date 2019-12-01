import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'

import CartPage from './CartPage/CartPage'
import ShippingPage from './ShippingPage/ShippingPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ProductPage from './Products/ProductPage'



const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity,
	productsLikeState,
	removeLike,
	addLike,

}) => {

	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
					<Route path="/" exact render={()=>(
							<ProductsList
								addProductToCart={addProductToCart}
								productsLikeState={productsLikeState}
								removeLike={removeLike}
								addLike={addLike}

						/>
						)}/>
						<Route path="/cart" render={()=>(
							<CartPage
								productsInCart={productsInCart}
								removeProductFromCart = {removeProductFromCart}
								changeProductQuantity={changeProductQuantity}
						/>)}/>

						<Route path="/shipping" component={ShippingPage}/>
						<Route path="/payment" component={PaymentPage}/>
						<Route path="/products/:productId" component={ProductPage} />


					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
