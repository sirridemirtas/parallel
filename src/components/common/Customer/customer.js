import React from "react"
import { /* useParams, */ useRouteMatch, Switch, Route } from "react-router-dom"
import cn from "classnames"
import PageSubtitle from "../PageSubtitle"
import Spinner from "../../ui/Spinner"
import PageTitle from "../PageTitle"
import ActionLink, { ActionLinks } from "../ActionLink"
import CustomerDetail from "../CustomerDetail"
import { Tabs, TabButton } from "../../ui/Tabs"
import styles from "./customer.module.css"

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
					<PageTitle>{data.name + " " + data.surname} <small></small></PageTitle>
					<ActionLinks links={[
						<ActionLink>Seçenekler</ActionLink>
					]} />

					<PageSubtitle>GENEL BİLGİLER</PageSubtitle>

					<CustomerDetail data={data} />

					<PageSubtitle>HESAPLAR</PageSubtitle>

					<Tabs>
						<TabButton href={`${url}`} activated={"true"}>Özet</TabButton>
						<TabButton href={`${url}/payments`}>Ödemeler</TabButton>
						<TabButton href={`${url}/products`}>Ürünler</TabButton>
					</Tabs>

					<Switch>
						<Route exact path={path}>
							<span>Hesaplar</span>
						</Route>

						<Route path={`${path}/accounts`}>
							<span>Hesaplar</span>
						</Route>

						<Route path={`${path}/payments`}>
							<span>Ödemeler</span>
						</Route>
					</Switch>
				</>}
		</div>
	)
}

export default Customer