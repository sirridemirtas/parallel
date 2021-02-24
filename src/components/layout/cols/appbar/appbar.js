import { useContext } from "react"
import cn from "classnames"
import { AppContext } from "store/App"
import { Dropdown, Search, SwitchTheme } from "components/common"
import { IconButton } from "components/ui"
import {
	Cube,
	Document,
	EllipsisHorizontal,
	PersonAdd,
	Wallet
} from "components/icons"
import styles from "./appbar.module.css"

function Appbar({ children, className }) {
	const store = useContext(AppContext)

	return children
		? (
			<div className={cn(styles.appbar, className)}>{children}</div>
		)
		: (
			<div className={cn(styles.appbar, className)}>
				<div>
					{
						<Dropdown
							align="bottomleft"
							button={
								<IconButton
									icon={<EllipsisHorizontal />}
									color="theme"
								/>
							}
							items={[
								{
									text: "Müşteri oluştur",
									icon: <PersonAdd />,
									onClick: () => store.dispatch(
										{ type: "TOGGLE_CREATE_CUSTOMER_MODAL" }
									)
								},
								{
									text: "Gider ekle",
									icon: <Wallet />
								},
								{
									text: "Ürün oluştur",
									icon: <Cube />,
									onClick: () => store.dispatch(
										{ type: "TOGGLE_CREATE_PRODUCT_MODAL" }
									)
								},
								{
									text: "Senet oluştur",
									icon: <Document />
								}
							]}
						/>
					}
				</div>
				<Search />
				<div>
					<SwitchTheme />
				</div>
			</div>
		)
}

export default Appbar