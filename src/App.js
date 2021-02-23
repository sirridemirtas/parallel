import { useContext } from "react"
import axios from "axios"
import { AppContext } from "./store"
import "./styles/index.css"
import Layout from "./components/layout"
import Login from "./components/common/Login"

function App() {
	const store = useContext(AppContext)

	// https://stackoverflow.com/a/51795582
	axios.defaults.baseURL = "http://localhost:3000/api"

	/**
	 * Authorization
	 */
	// https://github.com/axios/axios/issues/1905
	axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.authToken}`

	/* axios.interceptors.request.use(function (config) {
		config.headers.Authorization = `Bearer ${store.state.authToken}`
		return config
	}) */

	axios.interceptors.response.use(
		res => res,
		error => {
			const status = error.response.status
			if (status === 401) {
				store.dispatch({ type: "SET_AUTH_TOKEN", payload: null })
			} else if (status === 404) {
				console.log("err404")
			}
			throw error
		}
	)

	/**
	 * Theme
	 */
	if (localStorage.getItem("theme") === "dark" && store.state.authToken) {
		document.body.classList.add("dark")
	}

	return (
		!store.state.authToken
			? <Login />
			: <Layout />
	)
}

export default App