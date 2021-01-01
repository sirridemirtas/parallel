import React from "react"
import cn from "classnames"
import styles from "./product.module.css"

function Product({ children, className, ...props }) {
	return (
		<div className={cn(styles.product, className)} {...props}>
			<h1>Product</h1>
		</div>
	)
}

export default Product