import { useContext } from "react"

const Customer = ({ data, isLoading = true }) => {
	const store = useContext(CustomerContext)

	return (
		<div>Customer</div>
	)
}

export const Customer