import cn from "classnames"
import styles from "./index.module.css"

function TextArea({ children = "", className, size, color = undefined, ...props }) {
	return (
		<textarea className={cn(styles.textarea, color)} {...props}>
			{props.children}
		</textarea>
	)
}

export default TextArea