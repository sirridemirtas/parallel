import { cloneElement, useState } from "react"
import cn from "classnames"
import { List } from "../"
import styles from "./index.module.css"

function Dropdown({ items, button, align, ...props }) {
	const [visibility, setVisibility] = useState(false);

	const Button = cloneElement(button, {
		...button.props,
		onClick: () => setVisibility(!visibility),
		/* onBlur: () => setVisibility(false)*/
		className: styles.button,
	})

	items = items && items.map(item => {
		return {
			...item,
			onClick: (() => {
				setVisibility(false)
				if (item.onClick) {
					item.onClick()
				}
			})
		}
	})

	return (
		<div
			className={cn(
				styles.dropdown,
				props.className
			)}
		/* onBlur={() => setVisibility(false)} */
		>
			{Button}
			<div className={cn(
				styles.list,
				visibility || styles.hide,
				align ? styles[align] : styles.bottomLeft
			)}>
				<List items={items} />
			</div>
		</div>
	)
}

export default Dropdown