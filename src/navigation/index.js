import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Customer } from "components/pages"
/**
 * This file is not used yet
 */

function PageNavigation() {
	return (
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
	)
}

export default PageNavigation