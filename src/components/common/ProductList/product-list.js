import React from "react"
import { useLocation } from "react-router-dom"
import List from "../List"

function ProductList({ cluster, className, ...props }) {
	const location = useLocation()

	const products = [
		{
			text: "Apple iPhone 12 Pro",
			href: "/products/1",
			activated: location.pathname === "/producst/1"
		},
		{ text: "Dolor Sit Amet" },
		{ text: "Consecteteur" },
		{ text: "Adipiscing Elit" },
		{ text: "Lorem Ipsum" },
		{ text: "Dolor Sit Amet" },
		{ text: "Consecteteur" },
		{ text: "Adipiscing Elit" },
	]

	return (
		<div {...props}>
			<input
				type="text"
				placeholder="ürünlerde ara"
			/>
			<List drawer={true} itemCount items={products} />
		</div>
	)
}

export default ProductList