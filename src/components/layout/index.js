import React from "react"
import styles from "./index.module.css"
import Appbar from "./cols/appbar"
import CreateCustomer from "../forms/CreateCustomer"
import CreateProduct from "../forms/CreateProduct"
import Navigation from "../common/Navigation/navigation"
import Logo from "../common/Logo"

function Layout({ children }) {
	return (
		<div className={styles.layout} >
			<div className={styles.sidebar}>
				<Appbar className={styles.appbar} >
					<Logo />
				</Appbar>

				<Navigation className={styles.nav} />
			</div>

			<div className={styles.content}>
				<Appbar className={styles.appbar} />

				<div className={styles.main}>
					{children}
					<CreateCustomer />
					<CreateProduct />
				</div>
			</div>
		</div>
	)
}

export default Layout