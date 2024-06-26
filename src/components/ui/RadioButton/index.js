import cn from "classnames"
import styles from "./index.module.css"

function RadioButton({ color, children, ...props }) {
	return (
		<label className={cn(styles.wrapper, color, props.className)}>
			<input type="radio" className={styles.radio} {...props} />
			<div className={styles.icon}></div>
			<span>{children}</span>
		</label>
	)
}

export default RadioButton