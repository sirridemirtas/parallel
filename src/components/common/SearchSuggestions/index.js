import cn from "classnames"
import { List } from "../"
import styles from "./index.module.css"

function SearchSuggestions({ data, className, size, color = undefined, ...props }) {

	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<List drawer items={data} />
		</div>
	)
}

export default SearchSuggestions