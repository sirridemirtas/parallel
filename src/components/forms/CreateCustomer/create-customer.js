import React from "react"
import Modal, { ModalTitle, ModalContent, ModalActions, ModalButton } from "../../ui/Modal"
import TextField from "../../ui/TextField"
import styles from "./create-customer.module.css"

function CreateCustomer({ children, className, ...props }) {
	return (
		<Modal visibility={false}>
			<ModalTitle>Müşteri Oluştur</ModalTitle>

			<ModalContent className={[styles.form]}>
				<label>
					Ad
					<TextField placeholder="Ad" />
				</label>
				<label>
					Soyad
					<TextField placeholder="Soyad" />
				</label>

				<label>
					<TextField type="number" placeholder="TC Kimlik No" />
					<TextField type="number" placeholder="Telefon" />
				</label>
			</ModalContent>

			<ModalActions>
				<ModalButton variant="text">Oluştur</ModalButton>
				<ModalButton>kapat</ModalButton>
			</ModalActions>

		</Modal>
	)
}

export default CreateCustomer