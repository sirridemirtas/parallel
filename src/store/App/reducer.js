import { actions } from "./actions"

export const reducer = (state, action) => {
	const { payload } = action

	switch (action.type) {

		case "SWITCH_THEME":
			return { ...state, theme: actions.switchTheme(state.theme) }

		case "SET_TITLE":
			return { ...state, title: payload }

		default:
			return state
	}
}