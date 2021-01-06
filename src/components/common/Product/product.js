import React from "react"
import cn from "classnames"
import styles from "./product.module.css"
import PageTitle from "../PageTitle"
import Select from "../../ui/Select/select"

function Product({ children, className, ...props }) {
	return (
		<div className={cn(styles.product, className)} {...props}>
			<PageTitle>Product</PageTitle>
			<Select options={[
				{
					text: "Option",
					value: "option 1"
				},
				{
					text: "Option 2",
					value: "option 2"
				},
				{
					text: "Option 3",
					value: "option 3",
					//selected: true
				}
			]} />
		</div>
	)
}

export default Product