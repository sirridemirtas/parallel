import React, { useReducer, useRef } from "react"
import cn from "classnames"
import { ChevronDown, ChevronUp } from "../../icons"
import List from "../../common/List"
import styles from "./select.module.css"

function Select({ options = [], placeholder, className, align, size, color, ...props }) {

	const reducer = (state, action) => {
		switch (action.type) {
			case "SELECT_OPTION":
				return {
					...state, options: state.options.map((item, i) => {
						if (item.value === action.value) {
							state.label = item.text
							state.value = item.value
							return { ...item, selected: true }
						} else {
							return { ...item, selected: false }
						}
					})
				}

			default:
				return state
		}
	}

	const initialState = {
		label: placeholder || "Seçenekler",
		value: "",
		options: options
	}

	for (let option of initialState.options) {
		if (option.selected) {
			initialState.label = option.text
			initialState.value = option.value
		}

		option.onClick = () => {
			dispatch({ type: "SELECT_OPTION", value: option.value })
			//clickHandler()
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const optionArea = useRef()

	/* const clickHandler = () => {
		//optionArea.current.classList.toggle("hide")
		const el = optionArea.current

		if (el.classList.contains("hide")) {
			el.classList.remove("hide")
		} else {
			el.classList.add("hide")
		}
	} */

	return (
		<div className={cn(styles.select, className)}>

			<input type="hidden" value={state.value || ""} {...props} />

			<button className={styles.button} /* onClick={() => clickHandler()} */>
				<span>{state.label}</span>
				{align === "top"
					? <ChevronUp className={styles.chevron} />
					: <ChevronDown className={styles.chevron} />
				}
			</button>

			<div ref={optionArea} className={cn(
				styles.options,
				align ? styles[align] : styles.bottom,
				//"hide"
			)}>
				<List drawer compact items={state.options} />
			</div>
		</div>
	)
}

export default Select