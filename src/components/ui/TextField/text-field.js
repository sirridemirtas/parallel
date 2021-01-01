import React from "react"
import cn from "classnames"
import styles from "./text-field.module.css"

function TextField({ className, size, label = false, color = undefined, ...props }) {
	const input = (
		<input
			type="text"
			className={cn(
				styles.textField,
				color,
				className
			)}
			{...props}
		/>
	)

	return (
		label
			? (
				<div className={styles.wrapper}>
					<label className={styles.label}>{label}</label>
					{input}
				</div>
			)
			: input
	)
}

export default TextField