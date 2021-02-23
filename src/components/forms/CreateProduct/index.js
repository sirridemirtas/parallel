import { useContext, useState } from "react"
import axios from "axios"
import serialize from "form-serialize"
import { AppContext } from "../../../store/App"
import {
	InputGroup,
	Modal,
	ModalActions,
	ModalButton,
	ModalContent,
	ModalTitle,
	Spinner,
	TextArea,
	TextField

} from "../../ui"
import styles from "../CreateCustomer/index.module.css"

function CreateProduct() {
	const store = useContext(AppContext)
	const [loading, setLoading] = useState(false)

	const submit = (event) => {
		event.preventDefault()
		setLoading(true)

		axios.post(
			"/products",
			serialize(event.target, { hash: true })
		)
			.then((res) => {
				store.dispatch({ type: "TOGGLE_CREATE_PRODUCT_MODAL" })
				event.target.reset()
				setLoading(false)
			})
			.catch((res) => {
				setLoading(false)
			});
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

					{/* <label>
						Kategori
						<TextField name="category" placeholder="Kategori" required />
					</label> */}

					<label>
						Alış Fiyatı
						<TextField name="costPrice" type="number" placeholder="Alış Fiyatı" required />
					</label>

					<label>
						Satış Fiyatı
						<TextField name="salePrice" type="number" placeholder="Satış Fiyatı" required />
					</label>

					<label>Açıklama
						<TextArea name="description" placeholder="Açıklama" />
					</label>

					{/* <label>
						<Checkbox color="theme">Aktif</Checkbox>
					</label> */}

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