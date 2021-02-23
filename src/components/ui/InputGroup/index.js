import cn from "classnames"
import styles from "./index.module.css"

function InputGroup({ items, className, ...props }) {
	//children.map((Child, i) => children[i] = { i })
	return (
		<div className={cn(styles.inputGroup)} {...props}>
			{items}
		</div>
	)
}

export default InputGroup