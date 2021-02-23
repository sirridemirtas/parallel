import cn from "classnames"
import styles from "./index.module.css"

function TextField({ className, size, label = false, color = undefined, ...props }) {
	const input = (
		<input
			type="text"
			className={cn(
				styles.textField,
				color,
				size,
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