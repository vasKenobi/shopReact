import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'

import CartPage from './CartPage/CartPage'
import ShippingPage from './ShippingPage/ShippingPage'
import PaymentPage from './PaymentPage/PaymentPage'



const Main = () => {

	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
					<Route path="/" exact component={ProductsList}/>
						<Route path="/cart" component={CartPage}/>


						<Route path="/shipping" component={ShippingPage}/>
						<Route path="/payment" component={PaymentPage}/>


					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
