import { useState } from "react"
import {
	Modal,
	ModalTitle,
	ModalContent,
	ModalActions,
	ModalButton,
	Spinner
} from "../"

export const ConfirmBox = ({
	onConfirm, onClosed, title,
	body, acceptLabel, cancelLabel,
	visibility, ...props }) => {

	const [loading, setLoading] = useState(false)

	return (
		<Modal visibility={visibility} {...props}>
			<ModalTitle>{title}</ModalTitle>

			<ModalContent>{body}</ModalContent>

			<ModalActions>
				<ModalButton onClick={() => {
					setLoading(true)
					new Promise((resolve, reject) => {
						//setTimeout(() => {
						/* if (onConfirm()) {
							resolve("yes")
						} else {
							reject("no")
						} */
						//}, 2000);
						onConfirm && onConfirm()
					}).then((message) => {
						//console.log(message)
						setLoading(false)
					})
				}} disabled={loading}>
					{loading && <Spinner />}
					{acceptLabel || "EVET"}
				</ModalButton>

				<ModalButton
					onClick={() => { onClosed && onClosed() }}
					disabled={loading}
				>{cancelLabel || "KAPAT"}</ModalButton>
			</ModalActions>
		</Modal>
	)
}

export default ConfirmBox