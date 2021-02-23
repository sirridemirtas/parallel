import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ComponentsPreview, Customer, Logo, Navigation, Product } from "../common"
import { ModalProvider } from "../../store"
import styles from "./index.module.css"
import Appbar from "./cols/appbar"
import CreateCustomer from "../forms/CreateCustomer"
import CreateProduct from "../forms/CreateProduct"
import UpdateCustomer from "../forms/UpdateCustomer"

function Layout() {
	// https://pshrmn.github.io/route-tester/#/c/1232232323
	return (
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
							<Route
								//path="/customers/:id([0-9]*)"
								path="/customers/:customerId"
								//children={<Customer customerId={23423} />}
								render={props => <Customer customerId={props.match.params.customerId} />}
							/>
							<Route path="/products/:id">
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

						{/* <div className={styles.bottomBar}>bottom bar</div> */}
					</div>

				</div>
			</div>
		</Router>
	)
}

export default Layout