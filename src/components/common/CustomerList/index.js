import { useApi } from "hooks"
import { getAllCustomers } from "api/customer"
import { List } from "../"
import { Alert, Select, Spinner } from "components/ui"
import styles from "./index.module.css"

function CustomerList({ cluster, className, ...props }) {
	const [customers, loading, error] = useApi(getAllCustomers())
	if (error) {
		<Alert theme="red">Hata: {error?.message}</Alert>
	} else if (loading) {
		return <Spinner />
	} else
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
				<List drawer={true} itemCount items={customers.map((customer) => {
					return {
						text: `${customer.name} ${customer.surname}`,
						href: `/customers/${customer._id}`,
					}
				})} />
			</div>
		)
}

export default CustomerList