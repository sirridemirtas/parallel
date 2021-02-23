import { useEffect, useState } from "react"
import axios from "axios"
import cn from "classnames"
import { useParams } from "react-router-dom"
import { PageTitle } from "../"
import { Spinner } from "../../ui"
import styles from "./index.module.css"

function Product({ children, className, ...props }) {
	const [product, setProduct] = useState(null)
	let { id } = useParams()

	useEffect(() => {

		axios.get("/products/" + id)
			.then((res) => {
				setProduct(res.data)
			})
			.catch((res) => {
				console.log(res.data)
			});

	}, [id])

	return (!product ? <Spinner /> :
		<div className={cn(styles.product, className)} {...props}>
			<PageTitle>{product.name}</PageTitle>
		</div>
	)
}

export default Product