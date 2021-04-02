import cn from "classnames"
import styles from "./index.module.css"

function TextField({ className, color, label, size, ...props }) {
	const input = (
		<input
			type="text"
			className={cn(
				styles.textField,
				color,
				size,
				className
			)}
			autoComplete="off"
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