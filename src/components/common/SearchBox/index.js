import { useRef } from "react"
import cn from "classnames"
import { Search } from "../../icons"
import { IconButton } from "../../ui"
import styles from "./index.module.css"

function SearchBox({ className, size, color = undefined, ...props }) {
	const sBox = useRef(null)
	const handleFocus = () => sBox.current.focus()

	return (
		<div className={cn(styles.wrapper, className)}>
			<IconButton tabIndex="-1" className={styles.button} icon={<Search />}
				onClick={handleFocus} size="small"
			/>
			<input
				ref={sBox}
				type="search"
				className={styles.searchBox}
				placeholder={"search on parallel"}
				{...props}
			/>
		</div>
	)
}

export default SearchBox