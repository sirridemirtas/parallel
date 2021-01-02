import React from "react"
import cn from "classnames"
import styles from "./textarea.module.css"

function Textarea({ children = "", className, size, color = undefined, ...props }) {

	return (
		<textarea className={cn(styles.textarea, color)} {...props}>
			{props.children}
		</textarea>
	)
}

export default Textarea