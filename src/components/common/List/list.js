import React/* , { useState, useEffect } */ from "react"
import { Link } from "react-router-dom"
// import { v4 } from "uuid"
import cn from "classnames"
import styles from "./list.module.css"

const AnonymousTag = ({ children }) => <>{children}</>

export function ListSubtitle({ children, className }) {
	return <span className={cn(styles.subtitle, className)}>{children}</span>
}

export function ListItem({ text, href, icon, activated, selected, className, ...props }) {
	activated = activated || selected
	const Wrapper = ({ to, ...props }) => {
		return to
			? <Link to={to} {...props} />
			: <button {...props} />
	}

	return (
		<li tabIndex={-1} className={cn(styles.listItem, className)}>
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

function List({ items, children, className, drawer, compact, itemCount, ...props }) {
	if (!items.length) return <></>
	/*const [selectedIndex, setSelectedIndex] = useState(0)
	const navigateIndex = (l, i, t) => (t ? ++i : --i) < 0 ? l - 1 : i % l;
	const navprefix = v4()

	const handleKeyDown = (event) => {
		if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Tab") {
			event.preventDefault()
			event.key === "Enter" && event.target.click()
			 setSelectedIndex(navigateIndex(items.length, selectedIndex,
				(event.key === "ArrowDown" || event.key === "Tab")
			)) 
		}
	}

	useEffect(() => {
		document.querySelector(`[navindex=nav${navprefix}-${selectedIndex}]`).focus()
	}, [selectedIndex]) */

	return (
		<ul //onKeyDown={(event) => { handleKeyDown(event) }}
			className={cn(
				styles.list,
				drawer && styles.drawer,
				compact && styles.compact,
				className
			)} {...props}>
			{items.map((item, i) => (
				<AnonymousTag key={i}>
					{item.subtitle && <ListSubtitle>{item.subtitle}</ListSubtitle>}
					{<ListItem key={i}
						// onClick={() => { setSelectedIndex(i); item.onClick && item.onClick() }}
						// navindex={"nav" + navprefix + "-" + i}
						// autoFocus
						href={item.href || null}
						icon={item.icon || null}
						text={item.text}
						activated={item.activated || item.selected}
						{...item}
					/>}
				</AnonymousTag>
			))}
			{itemCount && <label className={styles.itemCount}>{items.length + " Öğe"}</label>}
		</ul>
	)
}

export default List