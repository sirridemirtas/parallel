import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

const AppContext = createContext(null)

const AppProvider = ({ ...props }) => {
	const initialState = {
		title: "Parallel React",
		theme: localStorage.getItem("theme") || "light",
		modals: {
			createCustomer: false,
			updateCustomer: false,
			createProduct: false,
			updateProduct: false
		},
		authToken: localStorage.getItem("auth_token") || null
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{props.children}
		</AppContext.Provider>
	)
}

export { AppProvider, AppContext }