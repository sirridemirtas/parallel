
import { Navigation, Logo } from "../../../common"
import { Link } from "react-router-dom"
import styles from "./sidebar.module.css"

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.top}>
				<Link to="/">
					<Logo />
				</Link>
			</div>

			<Navigation />
		</div >
	)
}

export default Sidebar