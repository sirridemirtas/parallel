import React from "react"
import { Link, NavLink } from "react-router-dom"
import cn from "classnames"
import { v4 } from "uuid"
import styles from "./button.module.css"

function LinkButton({ href, children, ...props }) {
	return <Link to={href} {...props}>{children}</Link>
}

function NavLinkButton({ href, children, ...props }) {
	return <NavLink to={href} {...props}>{children}</NavLink>
}

function BaseButton({ children, ...props }) {
	return <button type={props.type || "button"} {...props}>{children}</button>
}

function Button({ children, className, variant, navLink, shaped, size, color, ...props }) {
	const Comp = props.href ? (navLink ? NavLinkButton : LinkButton) : BaseButton;

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