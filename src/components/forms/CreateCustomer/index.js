import { useContext, useState } from "react"
import axios from "axios"
import serialize from "form-serialize"
import { AppContext } from "../../../store/App"
import { InputTurkishId } from "../../common"
import {
	Modal,
	ModalActions,
	ModalButton,
	ModalContent,
	ModalTitle,
	Spinner,
	TextArea,
	TextField
} from "../../ui"
import styles from "./index.module.css"

function CreateCustomer({ editMode = false, props }) {
	const store = useContext(AppContext)
	const [loading, setLoading] = useState(false)

	const submit = (event) => {
		event.preventDefault()
		setLoading(true)
		axios.post(
			"/customers",
			serialize(event.target, { hash: true })
		)
			.then((res) => {
				store.dispatch({ type: "TOGGLE_CREATE_CUSTOMER_MODAL" })
				event.target.reset()
				setLoading(false)
			})
			.catch((res) => {
				setLoading(false)
			})
	}

	return (
		<Modal visibility={store.state.modals.createCustomer} {...props}>
			<form onSubmit={(event) => submit(event)}>
				<ModalTitle>Müşteri Oluştur</ModalTitle>
				<ModalContent className={styles.form}>
					<label>Ad
						<TextField name="name" placeholder="Ad" required autoFocus />
					</label>
					<label>Soyad
						<TextField name="surname" placeholder="Soyad" required />
					</label>
					<label>Telefon
						<TextField name="phone" type="number" placeholder="Telefon" />
					</label>
					<label>TC Kimlik No
						<InputTurkishId />
					</label>
					<label>Adres
						<TextArea name="address" placeholder="Adres" />
					</label>
					<label>Notlar
						<TextArea name="notes" placeholder="Notlar" />
					</label>
				</ModalContent>
				<ModalActions>
					<ModalButton
						variant="text"
						type="submit"
						disabled={loading}
					>{loading && <Spinner />}Oluştur</ModalButton>

					<ModalButton disabled={loading} type="reset"
						onClick={() => store.dispatch({
							type: "TOGGLE_CREATE_CUSTOMER_MODAL"
						})}
					>kapat</ModalButton>
				</ModalActions>
			</form>
		</Modal>
	)
}

export default CreateCustomer