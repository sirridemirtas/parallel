import React from "react"
import cn from "classnames"
import styles from "./product.module.css"
import PageTitle from "../PageTitle"

function Product({ children, className, ...props }) {
	return (
		<div className={cn(styles.product, className)} {...props}>
			<PageTitle>Product</PageTitle>
		</div>
	)
}

export default Product