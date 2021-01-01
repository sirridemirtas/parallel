import React from "react"
import cn from "classnames"
import styles from "./input-group.module.css"

function InputGroup({ items, className, ...props }) {
	//children.map((Child, i) => children[i] = { i })
	return (
		<div className={cn(styles.inputGroup)}>
			{items}
		</div>
	)
}

export default InputGroup