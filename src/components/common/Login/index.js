import { useContext, useState } from "react"
import axios from "axios"
import cn from "classnames"
import serialize from "form-serialize"
import { AppContext } from "../../../store/App"
import { Logo, PageTitle } from "../"
import { Button, TextField } from "../../ui"
import styles from "./index.module.css"

function Login() {
	const store = useContext(AppContext)
	const [loading, setLoading] = useState(false)

	const titleDefault = "Giriş Yap"
	const [title, _setTitle] = useState(titleDefault)
	const setTitle = (title) => {
		_setTitle(title)

		setTimeout(() => {
			_setTitle(titleDefault)
		}, 2000)
	}

	const submit = (event) => {
		event.preventDefault()
		setLoading(true)
		axios.post(
			"/auth/login",
			serialize(event.target, { hash: true })
		).then((res) => {
			console.log(23424)
			store.dispatch({ type: "SET_AUTH_TOKEN", payload: res.data.token })
			setTitle(res.data.message)
			event.target.reset()
			setLoading(false)
		}).catch((err) => {
			setLoading(false)
			setTitle(err.response?.data.message)
		})
	}

	return (
		<div>
			<div className={styles.bg}>
				<div className={styles.wrapper}>
					<form onSubmit={event => submit(event)} className={styles.login}>
						<Logo link={false} className={styles.logo} color="black" />
						<PageTitle className={cn(styles.title, "mb-16")}>
							{title}
						</PageTitle>
						<TextField
							name="username"
							required={true}
							color="black"
							size="large"
							placeholder="Kullanıcı adı"
							className="mb-16 mt-8"
							autoFocus={true}
						/>
						<TextField
							name="password"
							required={true}
							color="black"
							size="large"
							type="password"
							placeholder="Şifre"
							className="mb-16"
						/>
						<Button
							color="black"
							type="submit"
							disabled={loading}
						>GİRİŞ</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login