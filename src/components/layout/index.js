import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ComponentsPreview, Customer, Logo, Navigation, Product } from "components/common"
import { routes } from "navigation/constants"
import { ModalProvider } from "store"
import Appbar from "./cols/appbar"
import {
	CreateCustomer,
	CreateProduct,
	UpdateCustomer
} from "components/forms"
import styles from "./index.module.css"

function Layout() {
	return ( // https://pshrmn.github.io/route-tester/#/c/1232232323
		<Router>
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
						<Switch>
							<Route path={routes.CUSTOMER}>
								<Customer />
							</Route>
							<Route path={routes.PRODUCT}>
								<Product />
							</Route>
							<Route path="/components">
								<ComponentsPreview />
							</Route>
						</Switch>
						<ModalProvider>
							<CreateCustomer />
							<UpdateCustomer />
							<CreateProduct />
						</ModalProvider>
					</div>
				</div>
			</div>
		</Router>
	)
}

export default Layout