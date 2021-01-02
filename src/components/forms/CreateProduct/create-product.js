import React from "react"
import Modal, { ModalTitle, ModalContent, ModalActions, ModalButton } from "../../ui/Modal"
import Textarea from "../../ui/TextArea"
import TextField from "../../ui/TextField"
import Spinner from "../../ui/Spinner"
import styles from "./create-customer.module.css"

function CreateProduct({ visibility }) {
	const [formVisibility, setVisibility] = React.useState(visibility)
	const [loading, setLoading] = React.useState(false)

	const toggleVisibility = () => (setVisibility(!formVisibility))

	const submit = (event) => {
		event.preventDefault()
		setLoading(true)

		setInterval(() => {
			setLoading(false)
		}, 2000);
	}

	return (
		<Modal visibility={formVisibility}>
			<form onSubmit={(event) => submit(event)}>
				<ModalTitle>Ürün Oluştur</ModalTitle>

				<ModalContent className={styles.form}>
					<label>
						Ad
						<TextField placeholder="Ad" required autoFocus />
					</label>

					<label>
						Soyad
						<TextField placeholder="Soyad" required />
					</label>

					<label>
						Telefon
						<TextField type="number" placeholder="Telefon" />
					</label>

					<label>TC Kimlik No
						<TextField
							type="number"
							placeholder="TC Kimlik No"
							minLength="11" maxLength="11"
							pattern="[1-9][0-9]{9}[02468]"
						/>
					</label>

					<label>Adres
						<Textarea placeholder="Adres" />
					</label>

					<label>Notlar
						<Textarea placeholder="Notlar" />
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
						onClick={() => toggleVisibility()}
					>kapat</ModalButton>
				</ModalActions>
			</form>
		</Modal>
	)
}

export default CreateProduct