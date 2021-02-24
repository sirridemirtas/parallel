import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {
	CustomerGroupList,
	CustomerList,
	ProductList
} from "../"
import Navigation from "./component"
import { NAV_ITEMS } from "./constants"

function NavigationContainer({ ...props }) {
	const location = useLocation()
	const [list, setList] = useState(null)
	const [navItems, setNavItems] = useState([])

	useEffect(() => {
		if (location.pathname.startsWith("/customers")) {
			setList(<CustomerList />)
		} else if (location.pathname.startsWith("/customers/groups")) {
			setList(<CustomerGroupList />)
		} else if (location.pathname.startsWith("/products")) {
			setList(<ProductList />)
		} else {
			setList(null)
		}
		setNavItems(NAV_ITEMS)
	}, [location])

	return (
		<Navigation navItems={navItems} list={list} {...props} />
	)
}

export default NavigationContainer