import { actions } from "./actions"

export const reducer = (state, action) => {
	const { payload } = action

	switch (action.type) {
		case "GET_CUSTOMER":
			return { ...state, authToken: actions.setAuthToken(payload) }

		case "SWITCH_THEME":
			return { ...state, theme: actions.switchTheme(state.theme) }

		case "SET_TITLE":
			document.title = payload
			return { ...state, title: payload }

		default:
			return state
	}
}