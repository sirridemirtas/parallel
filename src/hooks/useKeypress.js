import { useEffect } from "react"
/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */

function useKeypress(element, key, action) {
	useEffect(() => {
		function onKeyup(e) {
			if (e.key === key) action()
		}
		element.addEventListener("keyup", onKeyup);
		return () => element.removeEventListener("keyup", onKeyup)
	}, [])
}

export default useKeypress