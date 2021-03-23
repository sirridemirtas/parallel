import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

const CustomerContext = createContext(null)

const CustomerProvider = ({ ...props }) => {
	const initialState = null

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<CustomerContext.Provider value={{ state, dispatch }}>
			{props.children}
		</CustomerContext.Provider>
	)
}

export { CustomerProvider, CustomerContext }