import React from "react"
import cn from "classnames"
import styles from "./index.module.css"
import Appbar from "./cols/appbar"
import Sidebar from './cols/sidebar'
import Main from './cols/main'
import CreateCustomer from "../forms/CreateCustomer"
import CreateProduct from "../forms/CreateProduct"

function Layout({ children }) {
	return (
		<div className={cn(styles.layout)}>
			<Sidebar />
			<Main>
				<Appbar />
				{children}
			</Main>
			<CreateCustomer />
			<CreateProduct />
		</div>
	)
}

export default Layout