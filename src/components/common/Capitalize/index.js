import { cloneElement } from "react"
import { capitalizeCase } from "helpers"

function Capitalize({ children }) {
	return cloneElement(children, {
		...children.props,
		onInput: (event) => {
			event.target.value = capitalizeCase(event.target.value)
			children.props.onInput && children.props.onInput()
		}
	})
}

export default Capitalize