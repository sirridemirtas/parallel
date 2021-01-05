import React from "react"
import cn from "classnames"
import styles from "./dropdown.module.css"
import List from "../List";
//import Button from "../../ui/Button";

function Dropdown({ items, button, align, ...props }) {
	//const [visibility, setVisibility] = React.useState(false);

	const Button = React.cloneElement(button, {
		...button.props,
		/* onClick: () => setVisibility(!visibility),
		onBlur: () => setVisibility(false), 
		//onClick={() => setVisibility(true)}*/
		className: styles.button
	})

	/* items = items.map(item => {
		return {
			...item,
			onClick: (() => {
				setVisibility(false)
				if (item.onClick) {
					item.onClick()
				}
			})
		}
	}) */

	return (
		<div
			className={cn(
				styles.dropdown,
				props.className
			)}
		//onBlur={() => setVisibility(false)}
		>
			{Button}
			<div className={cn(
				styles.list,
				//visibility || styles.hide,
				align ? styles[align] : styles.bottomLeft
			)}>
				<List items={items} />
			</div>
		</div>
	)
}

export default Dropdown