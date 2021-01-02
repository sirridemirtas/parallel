export const actions = {
	switchTheme: (theme_) => {
		const theme = theme_ === "light" ? "dark" : "light"
		localStorage.setItem("theme", theme)
		document.body.classList.toggle("dark")
		console.log(theme)
		return theme
	}
}