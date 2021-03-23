import { Alert, Spinner } from "components/ui"

function conditionalRender(api, components) {
	const [data, loading, error] = api

	if (error) {
		return (
			components.error ||
			<Alert theme="red"><b>Hata</b>: {error?.message}</Alert>
		)
	} else if (loading) {
		return (
			components.loading ||
			<Spinner />
		)
	} else if (data.length) {
		return (
			components.empty ||
			<Alert theme="yellow">Veri yok!</Alert>
		)
	} else {
		return components.success
	}
}

export default conditionalRender