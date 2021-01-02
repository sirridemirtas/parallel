import React from "react"
import cn from "classnames"
import Sidebar from './cols/sidebar'
import Main from './cols/main'
import Appbar from "./cols/appbar"
import styles from "./index.module.css"

function Layout({ children }) {

	return (
		<div className={cn(styles.layout)}>
			<Sidebar />
			<Main>
				<Appbar />
				{children}
			</Main>
		</div>
	)
}

export default Layout