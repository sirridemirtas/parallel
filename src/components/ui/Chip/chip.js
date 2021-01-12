import React from "react"
import Button from "../Button"
import styles from "./chip.module.css"

function Chip({ children, className, ...props }) {

	return (
		<Button
			variant="outlined"
			className={styles.chip}
			size="small"
			{...props}>
			{children}
		</Button>
	)
}

export default Chip