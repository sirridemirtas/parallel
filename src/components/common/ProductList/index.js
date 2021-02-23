import { useEffect, useState } from "react"
//import { useLocation } from "react-router-dom"
import axios from "axios"
import { Spinner } from "../../ui"
import { List } from "../"

function ProductList({ cluster, className, ...props }) {
	//const location = useLocation()
	const [products, setProducts] = useState(null)

	useEffect(() => {
		axios.get("/products")
			.then((res) => {
				setProducts(res?.data.map((product) => {
					return {
						text: product.name,
						href: "/products/" + product._id,
						//activated: location.pathname === "/products/" + product._id,
					}
				}))
			})
			.catch((res) => {
				console.log(res.data)
			})
	}, [])

	return (
		<div {...props}>
			<input
				type="text"
				placeholder="ürünlerde ara"
			/>
			{!products
				? <Spinner />
				: <List drawer={true} itemCount items={products} />
			}
		</div>
	)
}

export default ProductList