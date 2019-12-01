import React,{Component} from 'react'
import {omit} from 'lodash';
import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {

	state = {
		productsInCart: {
			
		},
		productsLikeState: {
			'1':true,
			'2':true,
		}



	}

	addProductToCart = (productId,count) =>{
		this.setState((prevState)=>({
			productsInCart:{
				...prevState.productsInCart,
				[productId]:(prevState.productsInCart[productId] || 0 ) + count
			}
		}))
	}

	removeProductFromCart = (productId) => {
		this.setState((prevState) => {

			let prevProductsInCart = {...prevState.productsInCart}

			return{
				productsInCart: omit(prevProductsInCart, [productId])

			}
		})
	}

	changeProductQuantity = (productId,count) => {
		this.setState((prevState)=>({
			productsInCart:{
				...prevState.productsInCart,
				[productId]:count,
			}
		}))
	}
	addLike = (productId) => {
		this.setState((prevState)=>({
			productsLikeState:{
				...prevState.productsLikeState,
				[productId]:true
			}
		}))
	}

	removeLike = (productId) => {
		this.setState((prevState)=>({
			productsLikeState:{
				...prevState.productsLikeState,
				[productId]:false
			}
		}))
	}




	render() {
		return (
			<div>
				<Header 
					productsInCart={this.state.productsInCart}
					
				/>
				

				<Main 
					addProductToCart={this.addProductToCart}
					productsInCart={this.state.productsInCart}
					removeProductFromCart = {this.removeProductFromCart}
					changeProductQuantity={this.changeProductQuantity}
					productsLikeState={this.state.productsLikeState}
					removeLike={this.removeLike}
					addLike={this.addLike}

				/>

				<Footer/>
			</div>
		)
	}
}



export default App
