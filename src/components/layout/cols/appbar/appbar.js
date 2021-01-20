import React, { useContext } from "react"
import cn from "classnames"
//import useBodyScrollPosition from "../../../../hooks/useBodyScrollPosition"
import Dropdown from "../../../common/Dropdown"
import Search from "../../../common/Search"
import IconButton from "../../../ui/IconButton"
import { EllipsisHorizontal, PersonAdd, Cube, Document, Wallet } from "../../../icons"
import SwitchTheme from "../../../common/SwitchTheme"
import styles from "./appbar.module.css"
import { AppContext } from "../../../../store/App"

function Appbar({ children }) {
	//const scroll = useBodyScrollPosition()
	const store = useContext(AppContext)

	return children
		? (
			<div className={styles.appbar}>{children}</div>
		)
		: (
			<div className={cn(
				styles.appbar,
				//scroll.scrollTop > 16 && styles.shadow
			)}>
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