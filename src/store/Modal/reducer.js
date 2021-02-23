export const reducer = (state, action) => {
	const segments = action.type.split("_")
	const process = segments[0] // SHOW, HIDE, TOGGLE
	const type = segments[1] // CREATE, UPDATE, DELETE
	const modal = segments[2]

	const newStatus = ((s) => {
		switch (process) {
			case "SHOW":
				return true

			case "HIDE":
				return false

			case "TOGGLE":
				return !s

			default:
				return s
		}
	})(state[modal][type])

	state[modal][type] = newStatus

	console.log(state)

	return state
}