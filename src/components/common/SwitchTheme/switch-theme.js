import React, { useContext } from "react"
import cn from "classnames"
import { AppContext } from "../../../store/App"
import IconButton from "../../ui/IconButton"
import { Moon, MoonFill } from "../../icons"
import styles from "./switch-theme.module.css"

function SwitchTheme({ children, className, ...props }) {
	const store = useContext(AppContext)

	return (
		<IconButton color="theme"
			onClick={() => store.dispatch({ type: "SWITCH_THEME" })}
			icon={store.state.theme === "light" ? <MoonFill /> : <Moon />}
			className={cn(styles.switchTheme, className)}
			{...props}
		/>
	)
}

export default SwitchTheme