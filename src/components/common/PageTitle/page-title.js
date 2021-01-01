import React from "react"
import cn from "classnames"
import styles from "./page-title.module.css"

function PageTitle({ children, className, ...props }) {
	return (
		<h1 className={cn(styles.pageTitle, className)}>
			{children}
		</h1>
	)
}

export default PageTitle