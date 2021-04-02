import { useContext, useState } from "react"
import axios from "axios"
import serialize from "form-serialize"
import { routes } from "navigation/constants"
import { AppContext } from "store/App"
import { createCustomer } from "api/customer"
import { Capitalize, InputTurkishId } from "components/common"
import {
	Modal,
	ModalActions,
	ModalButton,
	ModalContent,
	ModalTitle,
	Spinner,
	TextArea,
	TextField
} from "components/ui"
import styles from "./index.module.css"
import { Redirect } from "react-router"

function CreateCustomer({ editMode = false, props }) {
	const store = useContext(AppContext)
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		setLoading(true)
		axios(createCustomer(
			serialize(event.target, { hash: true })
		)).then((res) => {
			setData(res.data)
			store.dispatch({ type: "TOGGLE_CREATE_CUSTOMER_MODAL" })
			event.target.reset()
			setLoading(false)
		}).catch((res) => {
			setLoading(false)
		})
	}

	return (
		<Modal visibility={store.state.modals.createCustomer} {...props}>
			{data && <Redirect to={
				routes.CUSTOMER.replace(":customerId", data._id)
			} />}
			<form onSubmit={handleSubmit}>
				<ModalTitle>Müşteri Oluştur</ModalTitle>
				<ModalContent className={styles.form}>
					<label>Ad
						<Capitalize >
							<TextField name="name" placeholder="Ad" required autoFocus />
						</Capitalize>
					</label>
					<label>Soyad
						<Capitalize >
							<TextField name="surname" placeholder="Soyad" required />
						</Capitalize>
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