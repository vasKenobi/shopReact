import React from 'react'

import './reset.css'
import './base.css'
import './header.css'
import './menu.css'
import './cart.css'

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

const App = () => {
	return (
		<div>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}


export default App
