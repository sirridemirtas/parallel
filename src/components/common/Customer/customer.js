import React from "react"
import { /* useParams, */ useRouteMatch, Switch, Route } from "react-router-dom"
import cn from "classnames"
import PageSubtitle from "../PageSubtitle"
import Spinner from "../../ui/Spinner"
import PageTitle from "../PageTitle"
import ActionLink, { ActionLinks } from "../ActionLink"
import CustomerDetail from "../CustomerDetail"
import { Tabs, TabButton } from "../../ui/Tabs"
import Chip from "../../ui/Chip"
import CustomerPayments from "../CustomerPayments"
import CustomerAccountSummary from "../CustomerAccountSummary"
import CustomerOrders from "../CustomerOrders"
import { Verified } from "../../icons_old"
import styles from "./customer.module.css"

const CustomerGroups = ({ text, icon, href, ...props }) => {
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


function Customer({ children, className, ...props }) {
	//let { id } = useParams()
	let { path, url } = useRouteMatch()

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
					<PageTitle>
						{data.name + " " + data.surname} <small></small>
						<Verified title="Güvenilir Müşteri"
							style={{ fontSize: "20px", color: "var(--blue)" }} />
					</PageTitle>

					<ActionLinks links={[
						<ActionLink>Seçenekler</ActionLink>
					]} />

					<PageSubtitle>GENEL BİLGİLER</PageSubtitle>
					<CustomerDetail data={data} />
					<CustomerGroups />

					<PageSubtitle>HESAPLAR</PageSubtitle>
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
				</>}
		</div>
	)
}

export default Customer