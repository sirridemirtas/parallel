import React from "react"
import cn from "classnames"
import List from "../../common/List"
import styles from "./search-suggestions.module.css"

function SearchSuggestions({ data, className, size, color = undefined, ...props }) {

	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<List drawer items={data} />
		</div>
	)
}

export default SearchSuggestions