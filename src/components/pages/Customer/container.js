import { useEffect, useState } from "react"
import { getCustomer } from "api/customer"
//import { routes } from "navigation/constants"
import {
	//Redirect,
	useParams
} from "react-router-dom"
import {
	Alert, Spinner
} from "components/ui"
import Customer from "./component"

function CustomerContainer() {
	const [customer, setCustomer] = useState(null)
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	//const [isDeleted, setIsDeleted] = useState(false)
	let { customerId } = useParams()

	useEffect(() => {
		getCustomer(customerId).then((res) => {
			setCustomer(res.data)
			setError(null)
			setIsLoaded(true)
		}).catch((err) => {
			setCustomer(null)
			setError(err)
			setIsLoaded(true)
		})
	}, [customerId])

	/* if (isDeleted) {
		return <Redirect to={routes.CUSTOMERS} />
	} else */ if (error) {
		return <Alert theme="red"><b>Hata</b>: {error?.message}</Alert>
	} else if (!isLoaded) {
		return <Spinner />
	} else if (!customer) {
		return <Alert theme="yellow">Müşteri bulunamadı!</Alert>
	} else {
		return <Customer data={customer} />
	}
}

export default CustomerContainer