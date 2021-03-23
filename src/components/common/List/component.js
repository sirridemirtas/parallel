import { Link } from "react-router-dom"
import cn from "classnames"
import styles from "./index.module.css"

const AnonymousTag = ({ children }) => <>{children}</>

export const ListSubtitle = ({ children, className }) => {
	return <span className={cn(styles.subtitle, className)}>{children}</span>
}

export const ListItem = ({
	activated,
	className,
	href,
	icon,
	selected,
	text,
	theme,
	...props
}) => {
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

function List({
	children,
	className,
	compact,
	drawer,
	items,
	itemCount,
	...props
}) {
	return (<ul className={cn(
		styles.list,
		drawer && styles.drawer,
		compact && styles.compact,
		className
	)} {...props}>
		{items.map((item, i) =>
			<AnonymousTag key={i}>
				{item.subtitle && <ListSubtitle>{item.subtitle}</ListSubtitle>}
				{<ListItem key={i}
					href={item.href || null}
					icon={item.icon || null}
					text={item.text}
					theme={item.theme || null}
					activated={item.activated || item.selected}
					{...item}
				/>}
			</AnonymousTag>
		)}
		{itemCount &&
			<label className={styles.itemCount}>
				{items.length + " Öğe"}
			</label>}
	</ul>)
}

export default List