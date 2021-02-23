import cn from "classnames"
import styles from "./index.module.css"

function Alert({ theme, children, className, ...props }) {
	return (
		<div
			className={cn(styles.alert, theme)}
			{...props}
		>{children}
		</div>
	)
}

export default Alert