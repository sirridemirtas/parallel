import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const AppContext = createContext(null)

const AppProvider = ({ ...props }) => {

	const initialState = {
		title: "Parallel React",
		theme: (localStorage.getItem("theme") || "light"),
		modals: {
			createCustomer: false,
			crerateProduct: false
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppProvider
