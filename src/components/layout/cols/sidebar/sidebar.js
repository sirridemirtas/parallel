import React from "react"
/* import { useLocation, useRouteMatch } from "react-router-dom"
import CustomerList from "../../../common/CustomerList/" */
import Logo from "../../../common/Logo"
import Navigation from "../../../common/Navigation/navigation"
import styles from "./sidebar.module.css"



function Sidebar() {
	//const [listItems, setListItems] = React.useState(navItems)
	//const location = useLocation()
	//const [list, setList] = React.useState(null)
	//const match = useRouteMatch("/customers/:id")

	/* React.useEffect(() => {
		setListItems(listItems.map((item, i) => {
			item.activated = item.href === location.pathname
			return item
		}))

		if (location.pathname === "/customers") {
			setList("customers")
		} else if (location.pathname === "/products") {
			setList("products")
		} else {
			setList(null)
		}

	}, [location]) */


	return (
		<div className={styles.sidebar}>

			<div className={styles.top}>
				<Logo />
			</div>

			<Navigation />
		</div>
	)
}

export default Sidebar