import cn from "classnames"
import { House } from "components/icons"
import styles from "./index.module.css"

function Logo({ children, className, variant, color }) {
	return (
		<div className={cn(styles.logo, color, className)} to="/">
			<House />
			{variant !== "app" && <span>{children || "Parallel"}</span>}
		</div>
	)
}

export default Logo