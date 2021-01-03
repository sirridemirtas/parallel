import React from "react"
//import { useParams } from "react-router-dom";
import cn from "classnames"

import Spinner from "../../ui/Spinner"
import PageTitle from "../PageTitle"
import ActionLink, { ActionLinks } from "../ActionLink"
import styles from "./customer.module.css"
import PageSubtitle from "../PageSubtitle"

//import CreateCustomer from "../../forms/CreateCustomer"

/* import Modal, { ModalTitle, ModalContent, ModalActions, ModalButton } from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmBox from "../../ui/ConfirmBox/confirm"; */
import CustomerDetail from "../CustomerDetail";


function Customer({ children, className, ...props }) {
	//let { id } = useParams()
	//const [modalVisibility, setModalVisibility] = React.useState(false)
	//const toggleModal = () => setModalVisibility(!modalVisibility)

	//const [confirmVisibility, setConfirmVisibility] = React.useState(false)
	//const toggleConfirm = () => setConfirmVisibility(!confirmVisibility)
	/* 
		const [data, setData] = React.useState(null)
	
		setTimeout(() => {
			setData({
				name: "Sırrı",
				surname: "Demirtaş",
				turkishIDNumber: "10000000146",
				phone: "05396205277",
				email: "sirridemirtas@gmail.com",
				address: "19 Mayıs Mah No. 38 Şişli"
			})
		}, 500); */

	const data = {
		name: "Sırrı",
		surname: "Demirtaş",
		turkishIDNumber: "10000000146",
		phone: "05396205277",
		email: "sirridemirtas@gmail.com",
		address: "19 Mayıs Mah No. 38 Şişli"
	}

	return (
		<div className={cn(styles.customer, className)} {...props}>
			{ (!data) ? <Spinner /> :
				<>
					<PageTitle>{data.name + " " + data.surname} <small></small></PageTitle>
					<ActionLinks links={[
						<ActionLink>Seçenekler</ActionLink>
					]} />

					<PageSubtitle>GENEL BİLGİLER</PageSubtitle>

					<CustomerDetail data={data} />

					<PageSubtitle>HESAPLAR</PageSubtitle>


					{/* <Button onClick={() => toggleModal()}>Modal</Button>
			<Modal visibility={modalVisibility}>
				<ModalTitle>Modal Title</ModalTitle>
				<ModalContent>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</ModalContent>
				<ModalActions>
					<ModalButton onClick={() => toggleModal()}>kapat</ModalButton>
				</ModalActions>
			</Modal>

			<Button onClick={() => toggleConfirm()}>CONFIRM</Button>
			<ConfirmBox
				visibility={confirmVisibility}
				onClosed={() => toggleConfirm()}
				onConfirm={() => "karpuz"}
				title="Title of Confirm"
				body="Are you sure you want to delete this customer?"
				acceptLabel="SİL"
				cancelLabel="İPTAL"
			/> */}
				</>}
		</div>
	)
}

export default Customer