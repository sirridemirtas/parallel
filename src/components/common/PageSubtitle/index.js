import cn from "classnames"
import styles from "./index.module.css"

function PageSubtitle({ children, className, ...props }) {
	return (
		<h2 className={cn(styles.pageSubtitle, className)}>
			{children}
		</h2>
	)
}

export default PageSubtitle