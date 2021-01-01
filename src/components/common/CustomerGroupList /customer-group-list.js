import React from "react"
import List from "../List"

function CustomerGroupList({ cluster, className, ...props }) {
	const groups = [
		{
			text: "Güvenilir Müşteriler",
			href: "/customers/groups/1",
		},
		{ text: "Kaçaklar" },
		{ text: "Consecteteur" },
	]

	return (
		<div {...props}>
			<List drawer={true} itemCount items={groups} />
		</div>
	)
}

export default CustomerGroupList