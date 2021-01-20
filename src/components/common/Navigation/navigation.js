import React from "react"
import cn from "classnames"
import { useLocation } from "react-router-dom"
import { People, Card, Cash, Document, Settings, List as ListIcon, PieChart } from "../../icons"
import List from "../List"
import ProductList from "../ProductList"
import CustomerList from "../CustomerList"
import CustomerGroupList from "../CustomerGroupList "
import styles from "./navigation.module.css"

function Navigation({ className }) {
	const location = useLocation()
	const [list, setList] = React.useState(null)

	const navs = (path) => (
		[
			{
				text: "Müşteriler",
				icon: <People />,
				href: "/customers",
				activated: path.startsWith("/customers") && (!path.startsWith("/customers/groups"))
			},
			{
				text: "Müşteri Grupları",
				icon: <People />,
				href: "/customers/groups",
				activated: path.startsWith("/customers/groups")
			},
			{
				text: "Ürünler",
				icon: <ListIcon />,
				href: "/products",
				activated: path.startsWith("/products")
			},
			{
				text: "Satışlar",
				icon: <Card />,
				href: "/orders",
				activated: path.startsWith("/orders")
			},
			{
				text: "Tahsilatlar",
				icon: <Cash />,
				href: "/payments",
				activated: path.startsWith("/payments")
			},
			{
				text: "Giderler",
				icon: <PieChart />,
				href: "/expenses",
				activated: path.startsWith("/expenses")
			},
			{
				subtitle: "Raporlar",
				text: "Günlük Rapor",
				icon: <Document />,
				href: "/reports/daily",
				activated: path.startsWith("/reports/daily")
			},
			{
				text: "Aylık Rapor",
				icon: <Document />,
				href: "/reports/monthly",
				activated: path.startsWith("/reports/monthly")
			},
			{
				text: "Yıllık Rapor",
				icon: <Document />,
				href: "/reports/yearly",
				activated: path.startsWith("/reports/yearly")
			},
			{
				text: "Components",
				href: "/components",
				icon: <Document />,
				activated: path.startsWith("/components")
			},
			{
				subtitle: "Ayarlar",
				text: "Ayarlar",
				icon: <Settings />,
				activated: path.startsWith("/settings")
			}
		]
	)
	const [navItems, setNavItems] = React.useState(navs(location.pathname))

	React.useEffect(() => {
		if (location.pathname.startsWith("/customers/groups")) {
			setList(<CustomerGroupList />)
		} else if (location.pathname.startsWith("/customers")) {
			setList(<CustomerList />)
		} else if (location.pathname.startsWith("/products")) {
			setList(<ProductList />)
		} else {
			setList(null)
		}

		setNavItems(navs(location.pathname))
	}, [location])

	return (
		<div className={cn(styles.wrapper, className)}>

			<div className={styles.nav}>
				<List drawer={true} items={navItems} />
			</div>

			<div className={styles.extra}>
				{list && list}
			</div>

		</div>
	)
}

export default Navigation