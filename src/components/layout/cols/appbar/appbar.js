import React from "react"
import cn from "classnames"
//import useBodyScrollPosition from "../../../../hooks/useBodyScrollPosition"
import styles from "./appbar.module.css"
import Search from "../../../common/Search"
/* import IconButton from "../../../ui/IconButton"
import { ReorderTwo } from "../../../icons"
import SwitchTheme from "../../../common/SwitchTheme" */

function Appbar({ flat }) {
	//const scroll = useBodyScrollPosition()
	return (
		<div className={cn(
			styles.appbar,
			//scroll.scrollTop > 16 && styles.shadow
		)}>
			<div>
				{/* <IconButton icon={<ReorderTwo />} size="large" color="black" /> */}
			</div>
			<Search />
			<div>
				{/* <SwitchTheme /> */}
			</div>
		</div>
	)
}

export default Appbar