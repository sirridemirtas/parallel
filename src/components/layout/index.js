import React from "react"
import cn from "classnames"
//import useWindowSize from "../../hooks/useWindowSize"
//import CONSTS from '../../constants/index'

import Sidebar from './cols/sidebar'
import Main from './cols/main'
import Appbar from "./cols/appbar"
// import Footer from "./cols/footer"
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