import React, { useContext } from "react"
import cn from "classnames"
import AppContext from "../../../store/AppContext"
import IconButton from "../../ui/IconButton"
import { Contrast } from "../../icons"
import styles from "./switch-theme.module.css"

function SwitchTheme({ children, className, ...props }) {
	const store = useContext(AppContext)
	return (
		<IconButton
			onClick={() => store.switchTheme()}
			icon={<Contrast />}
			className={cn(styles.switchTheme, className)}
			{...props}
		/>
	)
}

export default SwitchTheme