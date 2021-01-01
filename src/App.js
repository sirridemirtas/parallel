import React, { useState, useEffect } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"
import AppContext from "./store/AppContext"
import "./styles/index.css"
import Layout from "./components/layout"
import Customer from "./components/common/Customer"
import Product from "./components/common/Product"
import ComponentsPreview from "./components/common/ComponentsPreview"

function App() {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		const theme = localStorage.getItem("theme") || "light";
		setTheme(theme)
	}, [])

	const switchTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
		localStorage.setItem("theme", theme)
		document.body.classList.toggle("dark")
	}

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
			<Router>
				<Layout>
					<Switch>

						<Route path="/customers/:id" children={<Customer />} />

						<Route path="/product">
							<Product />
						</Route>

						<Route path="/components">
							<ComponentsPreview />
						</Route>

					</Switch>
				</Layout >
			</Router>
		</AppContext.Provider>
	)
}

export default App