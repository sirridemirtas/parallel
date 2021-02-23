import axios from "axios"
import serialize from "form-serialize"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ModalContext } from "../../../store"

function UpdateCustomer({ props }) {
	const store = useContext(ModalContext)
	const [loading, setLoading] = useState(false)
	let { customerId } = useParams()

	//store.dispatch({ type: "SHOW_CREATE_PRODUCT_MODAL" })

	const submit = (event) => {
		event.preventDefault()
		setLoading(true)

		axios.put(
			`/customers/${customerId}`,
			serialize(event.target, { hash: true })
		)
			.then((res) => {
				store.dispatch({ type: "TOGGLE_CREATE_CUSTOMER_MODAL" })
				event.target.reset()
				setLoading(false)
			})
			.catch((res) => {
				setLoading(false)
			})
	}

	/* axios.get(`/customers/${customerId}`)
		.then(res => {
			setCustomerData(res.data)
		})
		.catch((res) => {
			setCustomerData(null)
		}) */



	return (
		<div></div>
	)
}

export default UpdateCustomer