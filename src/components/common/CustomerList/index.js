import { useEffect, useState } from "react"
import { getAllCustomers } from "api/customer"
import { List } from "../"
import { Select, Spinner } from "../../ui"
import styles from "./index.module.css"

function CustomerList({ cluster, className, ...props }) {
	const [customers, setCustomers] = useState(null)

	useEffect(() => {
		getAllCustomers().then((res) => {
			setCustomers(res?.data.map((customer) => {
				return {
					text: `${customer.name} ${customer.surname}`,
					href: `/customers/${customer._id}`,
				}
			}))
		}).catch((err) => {
			console.log(err)
		})
	}, [])

	return (
		<div {...props}>
			<div className={styles.actions}>
				<Select className={styles.select} name="cluster" options={[
					{
						text: "Borcu Olanlar",
						value: "borclular"
					},
					{
						text: "Geciktirenler",
						value: "geciktirenler"
					},
					{
						text: "Tüm Müşteriler",
						value: "all"
					}
				]} />
				<input
					type="text"
					placeholder="müşterilerde ara"
				/>
			</div>
			{!customers
				? <Spinner />
				: <List drawer={true} itemCount items={customers} />
			}
		</div>
	)
}

export default CustomerList