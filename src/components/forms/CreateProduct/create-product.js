import React, { useContext } from "react"
import { AppContext } from "../../../store/App"
import Modal, { ModalTitle, ModalContent, ModalActions, ModalButton } from "../../ui/Modal"
import Textarea from "../../ui/TextArea"
import TextField from "../../ui/TextField"
import InputGroup from "../../ui/InputGroup"
import Spinner from "../../ui/Spinner"
import Checkbox from "../../ui/Checkbox"
import styles from "../CreateCustomer/create-customer.module.css"

function CreateProduct({ visibility }) {
	const store = useContext(AppContext)
	const [loading, setLoading] = React.useState(false)

	const submit = (event) => {
		event.preventDefault()
		setLoading(true)

		setInterval(() => {
			setLoading(false)
		}, 3000);
	}

	return (
		<Modal visibility={store.state.modals.createProduct}>
			<form onSubmit={(event) => submit(event)}>
				<ModalTitle>Ürün Oluştur</ModalTitle>

				<ModalContent className={styles.form}>
					<label>
						Ürün İsmi
						<TextField name="name" placeholder="Ürün İsmi" required />
					</label>

					<label>
						Ürün Kodu
						<TextField name="sku" placeholder="Ürün Kodu" required />
					</label>

					<label>
						Ürün Stoku / Birimi
						<InputGroup items={[
							<TextField name="stock" key="1" type="number" placeholder="Stoku" required />,
							<TextField name="unit" key="2" placeholder="Birim" required />
						]} />
					</label>

					<label>
						Kategori
						<TextField name="category" placeholder="Kategori" required />
					</label>

					<label>
						Alış Fiyatı
						<TextField name="costPrice" type="number" placeholder="Alış Fiyatı" required />
					</label>

					<label>
						Satış Fiyatı
						<TextField name="salePrice" type="number" placeholder="Satış Fiyatı" required />
					</label>

					<label>Açıklama
						<Textarea name="description" placeholder="Açıklama" />
					</label>

					<label>
						<Checkbox color="theme">Aktif</Checkbox>
					</label>

				</ModalContent>

				<ModalActions>
					<ModalButton
						variant="text"
						type="submit"
						disabled={loading}
					>
						{loading && <Spinner />} Oluştur
					</ModalButton>

					<ModalButton
						disabled={loading}
						type="reset"
						onClick={() => store.dispatch({ type: "TOGGLE_CREATE_PRODUCT_MODAL" })}
					>kapat</ModalButton>
				</ModalActions>
			</form>
		</Modal>
	)
}

export default CreateProduct