export const actions = {
	setAuthToken: (token) => {
		if (token) {
			localStorage.setItem("auth_token", token)
			return token
		} else {
			localStorage.removeItem("auth_token")
			return null
		}
	},

	switchTheme: (t) => {
		const theme = t === "light" ? "dark" : "light"

		localStorage.setItem("theme", theme)
		//document.body.classList.toggle("dark")
		if (theme === "light") {
			document.body.classList.remove("dark")
		} else {
			document.body.classList.add("dark")
		}

		return theme
	}
}