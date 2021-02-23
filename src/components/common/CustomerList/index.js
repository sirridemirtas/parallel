import { useEffect, useState } from "react"
import axios from "axios"
import { List } from "../"
import { Select, Spinner } from "../../ui"
import styles from "./index.module.css"

function CustomerList({ cluster, className, ...props }) {
	/* const location = useLocation()
	const customers = [
		{
			text: "Joe Biden",
			href: "/customers/1",
			activated: location.pathname.startsWith("/customers/1")
		},
		{ text: "Donald Trump" },
		{ text: "Barack Obama" },
		{ text: "George Bush" },
		{ text: "Bill Clinton" },
		{ text: "George H. W. Bush" },
		{ text: "Ronald Reagen" },
		{ text: "Jimmy Carter" },
	] */

	const [customers, setCustomers] = useState(null)

	useEffect(() => {
		axios.get("/customers")
			.then((res) => {
				setCustomers(res?.data.map((customer) => {
					return {
						text: `${customer.name} ${customer.surname}`,
						href: "/customers/" + customer._id,
					}
				}))
			})
			.catch((res) => {
				console.log(res.data)
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