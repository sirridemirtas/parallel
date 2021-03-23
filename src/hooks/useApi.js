import { useEffect, useState } from "react"
import axios from "axios"

function useApi(api = null, deps = []) {
	const [result, setResult] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		axios(api).then((res) => {
			setResult(res.data)
			setLoading(false)
			setError(null)
		}).catch((err) => {
			setResult(null)
			setLoading(false)
			setError(err)
		})
		// eslint-disable-next-line
	}, deps)

	return [result, loading, error]
}

export default useApi