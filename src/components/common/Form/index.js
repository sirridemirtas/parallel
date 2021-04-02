import {
	Modal,
	ModalActions,
	ModalButton,
	ModalContent,
	ModalTitle
} from "components/ui"
import styles from "./index.module.css"

function Form({ options, api, visibility }) {
	return (
		<Modal visibility={options.modal.visibility}>
			<form onSubmit={options.modal.onSubmit}>
				<ModalTitle>{options.modal.title}</ModalTitle>
				<ModalContent className={styles.form}>
					{options.fields.map((field, i) =>
						<label key={i}>
							{field.label}
							{field.element}
						</label>
					)}
				</ModalContent>
				<ModalActions>
					<ModalButton
						variant="text"
						type="submit"
					>{options.modal.labelSubmit || "GÖNDER"}</ModalButton>

					<ModalButton type="reset"
						onClick={options.modal?.onClose}
					>{options.modal.labelClose || "KAPAT"}</ModalButton>
				</ModalActions>
			</form>
		</Modal>
	)
}

export default Form