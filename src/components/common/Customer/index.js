import { useEffect, useState } from "react"
import axios from "axios"
import cn from "classnames"
import {
	useParams,
	useRouteMatch,
	Switch,
	Route
} from "react-router-dom"
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
import {
	Alert,
	Chip,
	ConfirmBox,
	Spinner,
	Tabs,
	TabButton
} from "components/ui"
import { Verified } from "components/icons"
import styles from "./index.module.css"

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
				<Route path={`${path}/accounts`}>
					<CustomerAccountSummary />
				</Route>
				<Route path={`${path}/payments`}>
					<CustomerPayments />
				</Route>
				<Route path={`${path}/orders`}>
					<CustomerOrders />
				</Route>
			</Switch>
		</>
	)
}

function Customer({ className, ...props }) {
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [customer, setCustomer] = useState({})
	const [deleteCustomer, setDeleteCustomer] = useState(false)
	let { customerId } = useParams()

	useEffect(() => {
		axios.get("/customers/" + customerId)
			.then((res) => {
				setError(null)
				setCustomer(res.data)
				setIsLoaded(true)
			})
			.catch((err) => {
				setIsLoaded(true)
				setError(err)
				setCustomer({
					name: "Jane",
					surname: "Doe",
					turkishIDNumber: "10000000146",
					phone: "05396205277",
					email: "sirridemirtas@gmail.com",
					address: "19 Mayıs Mah No. 38 Şişli"
				})
			})
	}, [customerId])

	if (error) {
		return <Alert theme="red"><b>Hata</b>: {error?.message}</Alert>
	} else if (!isLoaded) {
		return <Spinner />
	} else
		return (
			<div className={cn(styles.customer, className)} {...props}>
				<PageTitle>
					{customer.name + " " + customer.surname}
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
								onClick: () => setDeleteCustomer(true)
							}
						]}
					/>
				]} />
				<ConfirmBox
					visibility={deleteCustomer}
					body="Bu müşteriyi silmek istediğinize emin misiniz?"
					onConfirm={() => {
						setDeleteCustomer(false)
						axios.delete(`/customers/${customerId}`)
							.then((res) => {

							})
							.catch((res) => {

							})
					}}
					onClosed={() => {
						setDeleteCustomer(false)
						console.log("müşteri silinMEdi")
					}}
				/>
				{/* <PageSubtitle>GENEL BİLGİLER</PageSubtitle> */}
				<CustomerDetail data={customer} />
				<CustomerGroups />

				<PageSubtitle>HESAPLAR</PageSubtitle>
				<CustomerAccounts />
			</div>
		)
}

export default Customer