import React from "react"
import Modal, { ModalTitle, ModalContent, ModalActions, ModalButton } from "../Modal"
import Spinner from "../Spinner"

export const ConfirmBox = ({
	onConfirm, onClosed, title,
	body, acceptLabel, cancelLabel,
	children, ...props }) => {

	const [visibility, setVisibility] = React.useState(false)
	const [loading, setLoading] = React.useState(false)

	return (
		<Modal visibility={visibility} {...props}>
			<ModalTitle>{title}</ModalTitle>

			<ModalContent>{body}</ModalContent>

			<ModalActions>
				<ModalButton onClick={() => {
					setLoading(true)

					const promise = new Promise((resolve, reject) => {
						setTimeout(() => {
							if (onConfirm()) {
								resolve("yes")
							} else {
								reject("no")
							}

						}, 2000);
					})

					promise.then((message) => {
						console.log(message)
						setLoading(false)
					})
				}} disabled={loading}>
					{loading && <Spinner />}
					{acceptLabel || "EVET"}
				</ModalButton>
				<ModalButton onClick={() => onClosed()}
					disabled={loading}>{cancelLabel || "KAPAT"}</ModalButton>
			</ModalActions>
		</Modal>
	)
}

export default ConfirmBox