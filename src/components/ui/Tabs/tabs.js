import React, { useState } from "react"
import cn from "classnames"
import Button from "../Button"
import styles from "./tabs.module.css"

export const TabButton = ({ children, activated, ...props }) => {
	return (
		<Button
			variant="text"
			className={cn(styles.button, activated && styles.activated)}
			/* onClick={(event) => {
				event.target.parentNode.querySelector(`.${styles.activated}`)
					?.classList.remove(styles.activated)

				event.target.classList.add(styles.activated)
			}} */
			navLink={true}
			activeClassName={styles.activated}
			size="small"
			{...props}>
			{children}
		</Button>
	)
}

export function Tabs({ children, className, ...props }) {
	const [state] = useState(
		React.Children.toArray(children).filter(x => x.type.name === "TabButton")
	)

	return (
		<div className={cn(styles.tabs, className)} {...props}>
			{state}
		</div>
	)
}