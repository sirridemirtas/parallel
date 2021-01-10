import React/* , { useState, useEffect } */ from "react"
import cn from "classnames"
import SearchBox from "../SearchBox"
import SearchSuggestions from "../SearchSuggestions"
import styles from "./search.module.css"

function Search({ className }) {

	const results = [
		{
			subtitle: "Müşteriler",
			text: "Lorem ipsum dolor sit amet",
			icon: null,
			meta: "meta"
		},
		{
			subtitle: "Ürünler",
			text: "Lorem ipsum dolor sit amet",
			icon: null,
			meta: "meta"
		},
		{
			text: "Lorem ipsum dolor sit amet",
			icon: null,
			meta: "meta"
		}
	]

	/* const [results, setResults] = useState(null)

	useEffect(() => {
		setResults(data)
	}, [results]) */

	return (
		<div className={cn(styles.wrapper, className)}>
			<SearchBox className={styles.searchBox} />
			{results &&
				<SearchSuggestions className={styles.suggestions} data={results} />
			}
		</div>
	)
}

export default Search