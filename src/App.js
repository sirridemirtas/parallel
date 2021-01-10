import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles/index.css"
import AppProvider from "./store/App"
import Layout from "./components/layout"
import Customer from "./components/common/Customer"
import Product from "./components/common/Product"
import ComponentsPreview from "./components/common/ComponentsPreview"

function App() {

	React.useEffect(() => {
		if (localStorage.getItem("theme") === "dark") {
			document.body.classList.add("dark")
		}
	}, [])

	// https://pshrmn.github.io/route-tester/#/c/1232232323
	return (
		<AppProvider>
			<Router>
				<Layout>
					<Switch>
						<Route
							path="/customers/:id([0-9]*)"
							children={<Customer />}
						/>
						<Route path="/products">
							<Product />
						</Route>
						<Route path="/components">
							<ComponentsPreview />
						</Route>
					</Switch>
				</Layout >
			</Router>
		</AppProvider>
	)
}

export default App