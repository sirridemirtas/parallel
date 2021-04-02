import { useContext } from "react"
import { ModalContext } from "store"
import { Form } from "components/common"
import { TextField } from "components/ui"

function CreatePayment() {
	const store = useContext(ModalContext)
	return (
		<Form options={{
			modal: {
				visibility: store.state.PAYMENT.CREATE,
				title: <>Ödeme Al:&nbsp;<span style={{ color: "var(--theme)" }}>Jane Doe</span></>,
				onSubmit: () => true,
				onClose: () => store.dispatch({ type: "TOGGLE_CREATE_PAYMENT_MODAL" }),
				labelSubmit: "OLUŞTUR",
				labelClose: "KAPAT"
			},
			fields: [
				{
					label: "Tutar (₺)",
					element: <TextField name="amount" placeholder="Tutar" type="number" required />
				}, {
					label: "Ödeme Tarihi",
					element: <TextField name="createdAt" type="date" required />
				},
			]
		}} />
	)
}

export default CreatePayment