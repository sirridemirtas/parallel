import React, { useEffect, useReducer } from "react"
import cn from "classnames"
import { ChevronDown, ChevronUp } from "../../icons"
import List from "../../common/List"
import styles from "./select.module.css"

function Select({ items, className, align, size, color, ...props }) {

	const reducer = (state, action) => {
		switch (action.type) {

			case "SET_LABEL":
				return { ...state, label: action.payload }

			default:
				return state
		}
	}

	const initialState = {
		items: (
			items
				? items/* items.map((item, i) => {
					if (!item.activated) {
						item.onClick = () => {

						}
					} else {
						item.activated = true
					}
				}) */
				: []),
		value: "",
		label: "Seçenekler"
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	/* const [list, setList] = useState(items)
	const [val, setVal] = useState(null)
	const [label, setLabel] = useState("Seçenekler")

	const action = (items, index) => {
		return items.map((item, i) => {
			if (index !== i) {
				item.activated = undefined
			} else {
				item.activated = true
				setVal(item.value)
				setLabel(item.text)
			}
		})
	} */

	/* useEffect(() => {
		setList(action(items, 0))
	}, []) */


	return (
		<div className={styles.select}>

			<input type="hidden" value={state.value || ""} {...props} />

			<button className={styles.button} onClick={(event) => event.preventDefault()}>
				<span>{state.label}</span>
				{align === "top"
					? <ChevronUp className={styles.chevron} />
					: <ChevronDown className={styles.chevron} />
				}
			</button>

			<div className={cn(styles.options, align ? styles[align] : styles.bottom)}>
				<List drawer compact items={items} />
			</div>
		</div>
	)
}

export default Select