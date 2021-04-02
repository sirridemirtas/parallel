import { useEffect, useState } from "react"
import axios from "axios"
import cn from "classnames"
import { Redirect, useParams } from "react-router-dom"
import { deleteProduct } from "api/product"
import { ActionLinks, ActionLink, PageTitle } from "components/common"
import { ConfirmBox, Spinner } from "components/ui"
import styles from "./index.module.css"
import { routes } from "navigation/constants"

function Product({ children, className, ...props }) {
	const [product, setProduct] = useState(null)
	const [deleteProductModal, setDeleteProductModal] = useState(false)
	const [productIsDeleted, setProductIsDeleted] = useState(false)
	let { productId } = useParams()

	useEffect(() => {
		axios.get("/products/" + productId)
			.then((res) => {
				setProduct(res.data)
			})
			.catch((res) => {
				console.log(res.data)
			})
	}, [productId])

	return (!product ? <Spinner /> :
		<div className={cn(styles.product, className)} {...props}>
			<PageTitle>{product.name}</PageTitle>

			<ConfirmBox
				visibility={deleteProductModal}
				title={product.name}
				body="Bu ürünü silmek istediğinize emin misiniz?"
				onConfirm={() => {
					setDeleteProductModal(false)
					axios(deleteProduct(product._id))
						.then((res) => {
							setProductIsDeleted(true)
						}).catch((res) => {
							console.log("Ürün silinirlen bir hata oluştu!")
						})
				}}
				onClosed={() => {
					setDeleteProductModal(false)
				}}
			/>
			{productIsDeleted && <Redirect to={routes.PRODUCTS} />}

			<ActionLinks links={[
				<ActionLink>Ürünü Düzenle</ActionLink>,
				<ActionLink>Varyant Ekle</ActionLink>,
				<ActionLink>Fiyat Ekle</ActionLink>,
				<ActionLink>Stok Ekle</ActionLink>,
				<ActionLink className={"red"} onClick={() => {
					setDeleteProductModal(true)
				}}>Ürünü Sil</ActionLink>,
			]} />
		</div>
	)
}

export default Product