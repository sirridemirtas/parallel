import { useState } from "react"
import cn from "classnames"
import { Square, Checkbox as CheckboxMarked } from "components/icons"
import styles from "./index.module.css"

function Checkbox({ checked = false, color, children, ...props }) {
	const [cbChecked, setCbChecked] = useState(checked)

	return (
		<label className={cn(styles.wrapper, props.className)}>
			{cbChecked
				? <CheckboxMarked className={styles.icon} style={{
					color: color ? `var(--${color})` : "var(--gray)"
				}} />
				: <Square className={styles.icon} style={{ color: "var(--gray)" }} />
			}
			<input type="checkbox" className={styles.checkbox} checked={cbChecked}
				onChange={() => {
					setCbChecked(!cbChecked);
					props.onChange && props.onChange()
				}} {...props} />

			<span>{children}</span>
		</label>
	)
}

export default Checkbox