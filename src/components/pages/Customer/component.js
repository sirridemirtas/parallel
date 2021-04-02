import { useState } from "react"
import axios from "axios"
import cn from "classnames"
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import { routes } from "navigation/constants"
import {
	ActionLink,
	ActionLinks,
	Dropdown,
	CustomerAccountSummary,
	CustomerDetail,
	CustomerOrders,
	CustomerPayments,
	PageSubtitle,
	PageTitle
} from "components/common"
import { Chip, ConfirmBox, Tabs, TabButton } from "components/ui"
import { Verified } from "components/icons"
import styles from "./index.module.css"
import { deleteCustomer } from "api/customer"

const CustomerGroups = () => {
	return (
		<div className={styles.groups}>
			<PageSubtitle>Gruplar</PageSubtitle>
			<Chip color="green">
				Güvenilir Müşteriler
			</Chip>
			<Chip color="blue">
				Onaylı
			</Chip>
		</div>
	)
}

const CustomerAccounts = () => {
	const { path, url } = useRouteMatch()

	return (
		<>
			<Tabs>
				<TabButton exact href={`${url}`}>Özet</TabButton>
				<TabButton href={`${url}/payments`}>Ödemeler</TabButton>
				<TabButton href={`${url}/orders`}>Siparişler</TabButton>
			</Tabs>
			<div className={"mb-16"}></div>
			<Switch>
				<Route exact path={path}>
					<CustomerAccountSummary />
				</Route>
				<Route path={`${routes.CUSTOMER_ACCOUNTS}`}>
					<CustomerAccountSummary />
				</Route>
				<Route path={`${routes.CUSTOMER_PAYMENTS}`}>
					<CustomerPayments />
				</Route>
				<Route path={`${routes.CUSTOMER_ORDERS}`}>
					<CustomerOrders />
				</Route>
			</Switch>
		</>
	)
}

function Customer({ data, className, ...props }) {
	const [deleteCustomerModal, setDeleteCustomerModal] = useState(false)
	const [isDeleted, setIsDeleted] = useState(false)

	return (
		<div className={cn(styles.customer, className)} {...props}>
			{isDeleted && <Redirect to={routes.CUSTOMERS} />}
			<PageTitle>
				{data.name + " " + data.surname}
				<Verified className={styles.badge} title="Güvenilir Müşteri" />
			</PageTitle>
			<ActionLinks links={[
				<Dropdown
					button={<ActionLink>Seçenekler</ActionLink>}
					items={[
						{
							text: "Hesap oluştur",
						},
						{
							text: "Bilgileri düzenle",
							theme: "green"
						},
						{
							text: "Müşteriyi sil",
							theme: "red",
							onClick: () => setDeleteCustomerModal(true)
						}
					]}
				/>
			]} />
			<ConfirmBox
				visibility={deleteCustomerModal}
				title={`${data.name} ${data.surname}`}
				body="Bu müşteriyi silmek istediğinize emin misiniz?"
				onConfirm={() => {
					setDeleteCustomerModal(false)
					axios(deleteCustomer(data._id))
						.then((res) => {
							setIsDeleted(true)
						}).catch((res) => {
							console.log("Müşteri silinirlen bir hata oluştu!")
						})
				}}
				onClosed={() => {
					setDeleteCustomerModal(false)
					console.log("müşteri silinMEdi")
				}}
			/>
			{/* <PageSubtitle>GENEL BİLGİLER</PageSubtitle> */}
			<CustomerDetail data={data} />
			<CustomerGroups />

			<PageSubtitle>HESAPLAR</PageSubtitle>
			<CustomerAccounts />
		</div>
	)
}

export default Customer