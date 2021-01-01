import React from "react"
import { useLocation } from "react-router-dom"
import List from "../List"
/* import { Search } from "../../icons"
import styles from "./customer-list.module.css" */

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
			<select>
				<option>Borcu Olanlar</option>
				<option>Geciktirenler</option>
				<option>Tüm Müşteriler</option>
			</select>
			<input
				type="text"
				placeholder="müşterilerde ara"
			/>
			<List drawer={true} itemCount items={customers} />
		</div>
	)
}

export default CustomerList