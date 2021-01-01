import React, { useRef } from "react"
import cn from "classnames"
import IconButton from "../../ui/IconButton"
import { Search } from "../../icons"
import styles from "./search-box.module.css"

function SearchBox({ className, size, color = undefined, ...props }) {
	const sBox = useRef(null)
	const handleFocus = () => sBox.current.focus()

	return (
		<div className={styles.wrapper}>
			<IconButton tabIndex="-1" className={styles.button} icon={<Search />}
				onClick={handleFocus} size="small"
			/>
			<input
				ref={sBox}
				type="search"
				className={cn(
					styles.searchBox,
					className
				)}
				placeholder={"search on parallel"}
				{...props}
			/>
		</div>
	)
}

export default SearchBox