import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Spinner } from "components/ui"


export const ListItem = ({ text, href, icon, activated, selected, theme, className, ...props }) => {
	activated = activated || selected
	const Wrapper = ({ to, ...props }) => {
		return to
			? <Link to={to} {...props} />
			: <button {...props} />
	}

	return (
		<li tabIndex={-1} className={cn(styles.listItem, theme, className)}>
			<Wrapper to={href || undefined} tabIndex={activated ? -1 : undefined}
				className={cn(styles.element, activated && styles.activated)}
				{...props}>
				{
					<>
						{icon && icon}
						<div className={styles.text}>{text || ""}</div>
					</>
				}
			</Wrapper>
		</li>
	)
}

function ListContainer({ items, children, className, drawer, compact, itemCount, ...props }) {
	if (!items) return <></>

	return (!items ? <ListLoader /> :
		<List
			items={items}
			{...props}
		/>
	)
}

export default ListContainer