import React, { useContext } from "react"
import { AppContext } from "../../../store/App"
import { isTurkishId } from "../../../helpers"
import Modal, { ModalTitle, ModalContent, ModalActions, ModalButton } from "../../ui/Modal"
import Textarea from "../../ui/TextArea"
import TextField from "../../ui/TextField"
import Spinner from "../../ui/Spinner"
import styles from "./create-customer.module.css"

function CreateCustomer({ visibility }) {
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
		<Modal visibility={store.state.modals.createCustomer}>
			<form onSubmit={(event) => submit(event)}>
				<ModalTitle>Müşteri Oluştur</ModalTitle>

				<ModalContent className={styles.form}>
					<label>
						Ad
						<TextField name="name" placeholder="Ad" required autoFocus />
					</label>

					<label>
						Soyad
						<TextField name="surname" placeholder="Soyad" required />
					</label>

					<label>
						Telefon
						<TextField name="phone" type="number" placeholder="Telefon" />
					</label>

					<label>TC Kimlik No
						<TextField
							name="turkishId"
							type="text"
							placeholder="TC Kimlik No"
							minLength="11" maxLength="11"
							pattern="[1-9][0-9]{9}[02468]"
							onInput={(event) => {
								if (!isTurkishId(event.target.value)) {
									event.target.setCustomValidity("Geçersiz TC Kimlik Numarası!")
								} else {
									event.target.setCustomValidity("")
								}
							}}
						/>
					</label>

					<label>Adres
						<Textarea name="address" placeholder="Adres" />
					</label>

					<label>Notlar
						<Textarea name="notes" placeholder="Notlar" />
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
						onClick={() => store.dispatch({ type: "TOGGLE_CREATE_CUSTOMER_MODAL" })}
					>kapat</ModalButton>
				</ModalActions>
			</form>
		</Modal>
	)
}

export default CreateCustomer