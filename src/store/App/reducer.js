import { actions } from "./actions"

export const reducer = (state, action) => {
	const { payload } = action

	switch (action.type) {
		case "SET_AUTH_TOKEN":
			return { ...state, authToken: actions.setAuthToken(payload) }

		case "SWITCH_THEME":
			return { ...state, theme: actions.switchTheme(state.theme) }

		case "SET_TITLE":
			document.title = payload
			return { ...state, title: payload }

		case "TOGGLE_CREATE_CUSTOMER_MODAL":
			return {
				...state, modals: {
					...state.modals,
					createCustomer: (!state.modals.createCustomer)
				}
			}

		case "TOGGLE_CREATE_PRODUCT_MODAL":
			return {
				...state, modals: {
					...state.modals,
					createProduct: (!state.modals.createProduct)
				}
			}

		default:
			return state
	}
}