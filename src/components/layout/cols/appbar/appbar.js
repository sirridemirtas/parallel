import React from "react"
import cn from "classnames"
//import useBodyScrollPosition from "../../../../hooks/useBodyScrollPosition"
import Dropdown from "../../../common/Dropdown"
import Search from "../../../common/Search"
import IconButton from "../../../ui/IconButton"
import { EllipsisHorizontal, PersonAdd, Cube, Document, Wallet } from "../../../icons"
import SwitchTheme from "../../../common/SwitchTheme"
import styles from "./appbar.module.css"

function Appbar() {
	//const scroll = useBodyScrollPosition()
	return (
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
								href: "/customers/4",
								color: "red"
							},
							{
								text: "Gider ekle",
								icon: <Wallet />
							},
							{
								text: "Ürün oluştur",
								icon: <Cube />
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