import React from "react"
import cn from "classnames"
import { v4 } from "uuid"
import styles from "./button.module.css"

function LinkButton({ href, children, ...props }) {
	return <a href={href} {...props}>{children}</a>
}

function BaseButton({ children, ...props }) {
	return <button type={props.type || "button"} {...props}>{children}</button>
}

function Button({ children, className, variant, shaped, size, color, ...props }) {
	const Comp = props.href ? LinkButton : BaseButton;

	return (
		<Comp key={v4()}
			className={cn(
				styles.button,
				variant && styles[variant],
				size && styles[size],
				color || color,
				shaped && styles.shaped,
				className
			)} {...props}> {children}
		</Comp>
	)
}

export default Button