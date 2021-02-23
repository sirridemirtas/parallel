import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Customer } from "components/pages"
/**
 * This file is not used yet
 */

const PageNavigation = ({ }) => {
	return (
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
	)
}

export const PageNavigation