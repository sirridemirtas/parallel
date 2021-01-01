import React from "react"
import cn from "classnames"
import styles from "./action-link.module.css"

export function ActionLinks({ links }) {
	return (
		<div>
			{links
				.map((t, i) => <span key={i}>{t}</span>)
				.reduce((prev, curr) => [prev, " | ", curr])}
		</div>
	)
}

function ActionLink({ children, className, ...props }) {
	return (
		<a href={props.href} className={cn(styles.actionLink, className)} {...props}>
			{children}
		</a>
	)
}

export default ActionLink