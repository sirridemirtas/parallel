import React from "react"
import { Call, Location, FingerPrint } from "../../icons"
import styles from "./customer-detail.module.css"

const DetailButton = ({ text, icon, href, ...props }) => {
	return (
		<a className={styles.button} href={href && href} {...props}>
			{icon && icon}
			{text}
		</a>
	)
}

function CustomerDetail({ data, className, ...props }) {
	return (
		<div className={styles.detail} {...props}>
			{data.turkishIDNumber && <DetailButton
				icon={<FingerPrint color="orange" />}
				text={data.turkishIDNumber}
			/>}

			{data.phone && <DetailButton
				icon={<Call color="blue" />}
				text={data.phone}
				href={"tel:" + data.phone}
			/>}

			{data.address && <DetailButton
				icon={<Location color="red" />}
				text={<address>{data.address}</address>}
			/>}

		</div>
	)
}

export default CustomerDetail