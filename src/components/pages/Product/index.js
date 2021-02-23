import { useContext } from "react"

const Product = ({ data, isLoading = true }) => {
	const store = useContext(ProductContext)

	return (
		<div>Product</div>
	)
}

export const Product