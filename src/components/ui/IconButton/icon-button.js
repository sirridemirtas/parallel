import React from "react"
import cn from "classnames"
import styles from "./icon-button.module.css"
import colors from "../../../styles/colors.css"

function IconButton({ className, size, color, ...props }) {

	return (
		<button className={cn(
			styles.iconButton,
			size && styles[size],
			color || colors[color],
			className
		)} {...props}>
			{props.icon && props.icon}
		</button>
	)
}

export default IconButton