import cn from "classnames"
import styles from "./index.module.css"

function PageTitle({ children, className }) {
	return (
		<h1 className={cn(styles.pageTitle, className)}>
			{children}
		</h1>
	)
}

export default PageTitle