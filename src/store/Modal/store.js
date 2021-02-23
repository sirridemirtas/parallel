import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const ModalContext = createContext(null)

export const ModalProvider = ({ ...props }) => {
	const initialState = {
		CUSTOMER: {
			CREATE: true,
			UPDATE: false,
			DELETE: false
		},
		PRODUCT: {
			CREATE: false,
			UPDATE: false,
			DELETE: false
		},
		EXPENSES: {
			CREATE: false,
			UPDATE: false,
			DELETE: false
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<ModalContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ModalContext.Provider>
	)
}