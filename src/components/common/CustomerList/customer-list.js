import React from "react"
import { useLocation } from "react-router-dom"
import Select from "../../ui/Select"
import List from "../List"
/* import { Search } from "../../icons"*/
import styles from "./customer-list.module.css"

function CustomerList({ cluster, className, ...props }) {
	const location = useLocation()

	const customers = [
		{
			text: "Joe Biden",
			href: "/customers/1",
			activated: location.pathname === "/customers/1"
		},
		{ text: "Donald Trump" },
		{ text: "Barack Obama" },
		{ text: "George Bush" },
		{ text: "Bill Clinton" },
		{ text: "George H. W. Bush" },
		{ text: "Ronald Reagen" },
		{ text: "Jimmy Carter" },
	]

	return (
		<div {...props}>
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
			]} onInput={(event) => console.log("event.target.value")} />
			<input
				type="text"
				placeholder="müşterilerde ara"
			/>
			<List drawer={true} itemCount items={customers} />
		</div>
	)
}

export default CustomerList