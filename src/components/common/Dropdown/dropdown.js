import React from "react"
import cn from "classnames"
import styles from "./dropdown.module.css"
import List from "../List";
//import Button from "../../ui/Button";

function Dropdown({ items, button, align, ...props }) {
	const [visibility, setVisibility] = React.useState(false);

	const Button = React.cloneElement(button, {
		...button.props,
		//onClick: () => setVisibility(!visibility),
		onBlur: () => setVisibility(false),
		className: styles.button
	})

	return (
		<div className={cn(styles.dropdown, props.className)}
			onClick={() => setVisibility(!visibility)}>
			{Button}
			<List items={items} className={cn(
				styles.list,
				visibility || styles.hide,
				align ? styles[align] : styles.bottomLeft
			)} />
		</div>
	)
}

export default Dropdown