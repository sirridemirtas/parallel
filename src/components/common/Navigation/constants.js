import {
	Card,
	Cash,
	Document,
	List as ListIcon,
	// LogOut,
	People,
	Settings,
	PieChart
} from "components/icons"

export const NAV_ITEMS = [
	{
		text: "Müşteriler",
		icon: <People />,
		href: "/customers"
	},
	{
		text: "Müşteri Grupları",
		icon: <People />,
		href: "/customers/groups"
	},
	{
		text: "Ürünler",
		icon: <ListIcon />,
		href: "/products"
	},
	{
		text: "Satışlar",
		icon: <Card />,
		href: "/orders"
	},
	{
		text: "Tahsilatlar",
		icon: <Cash />,
		href: "/payments"
	},
	{
		text: "Giderler",
		icon: <PieChart />,
		href: "/expenses"
	},
	{
		subtitle: "Raporlar",
		text: "Günlük Rapor",
		icon: <Document />,
		href: "/reports/daily"
	},
	{
		text: "Aylık Rapor",
		icon: <Document />,
		href: "/reports/monthly"
	},
	{
		text: "Yıllık Rapor",
		icon: <Document />,
		href: "/reports/yearly"
	},
	{
		text: "Components",
		href: "/components",
		icon: <Document />
	},
	{
		subtitle: "Ayarlar",
		text: "Ayarlar",
		icon: <Settings />
	},
	/* const store = useContext(AppContext)
	{
		text: "Oturumu Kapat",
		icon: <LogOut />,
		onClick: () => {
			store.dispatch({ type: "SET_AUTH_TOKEN", payload: null })
			window.location.reload()
		}
	} */
]