import cn from "classnames"
import styles from "./index.module.css"
import colors from "../../../styles/colors.css"

function IconButton({ className, size, color, icon, ...props }) {
	return (
		<button className={cn(
			styles.iconButton,
			size && styles[size],
			color || colors[color],
			className
		)} {...props}>
			{icon && icon}
		</button>
	)
}

export default IconButton