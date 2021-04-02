import cn from "classnames"
import { List } from "components/common"
import styles from "./index.module.css"

function Navigation({ className, list, navItems }) {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.nav}>
				<List drawer={true} items={navItems} />
				{/* <small className={"txtCenter"} style={{
					color: "var(--gray)",
					display: "block",
					textAlign: "center",
					margin: "8px"
				}}>&copy; 2021 Sırrı Demirtaş</small> */}
			</div>
			<div className={styles.extra}>
				{list && list}
			</div>
		</div>
	)
}

export default Navigation