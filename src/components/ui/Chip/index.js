import { Button } from "../"
import styles from "./index.module.css"

function Chip({ children, className, ...props }) {
	return (
		<Button
			variant="outlined"
			className={styles.chip}
			size="small"
			{...props}>
			{children}
		</Button>
	)
}

export default Chip