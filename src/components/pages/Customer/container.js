import { useParams } from "react-router-dom"
import { useApi } from "hooks"
import { conditionalRender } from "helpers"
import { getCustomer } from "api/customer"
import { Alert, Spinner } from "components/ui"
import Customer from "./component"

function CustomerContainer() {
	let { customerId } = useParams()
	const api = useApi(getCustomer(customerId), [customerId])

	return conditionalRender(api, {
		success: <Customer data={api[0]} />,
		error: <Alert theme="red"><b>Hata</b>: {api[2]?.message}</Alert>,
		loading: <Spinner />
	})
}

export default CustomerContainer