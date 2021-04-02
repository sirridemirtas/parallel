import { /* useEffect, */ useState } from "react"
// import axios from "axios"

function useSubmit(submitFunction) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleSubmit = async (event) => {
		try {
			setLoading(true)
			setError(null)
			await submitFunction(event)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}
	return [handleSubmit, loading, error]
}

export default useSubmit