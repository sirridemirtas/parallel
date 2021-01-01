import React from "react"
import { Link } from "react-router-dom"
import { House } from "../../icons_old"
import styles from "./logo.module.css"

function Logo({ children, className }) {

	return (
		<Link className={styles.logo} to="/">
			<House />
			<span>{children || "Parallel"}</span>
		</Link>
	)
}

export default Logo