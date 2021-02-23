import { useContext } from "react"
import cn from "classnames"
import { AppContext } from "../../../store/App"
import { Moon, Sunny } from "../../icons"
import { IconButton } from "../../ui"
import styles from "./index.module.css"

function SwitchTheme({ children, className, ...props }) {
	const store = useContext(AppContext)

	return (
		<IconButton color="theme"
			onClick={() => store.dispatch({ type: "SWITCH_THEME" })}
			icon={store.state.theme !== "light" ? <Sunny color="orange" /> : <Moon />}
			className={cn(styles.switchTheme, className)}
			{...props}
		/>
	)
}

export default SwitchTheme