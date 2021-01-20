export const actions = {
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