import React from "react"
import styles from "./customer-account-summary.module.css"

export const Box = ({ title, content }) => {
	return (
		<div className={styles.box}>

			<h2 className={styles.title}>
				{title}
			</h2>

			<div className={styles.content}>
				<label className={styles.label}>
					{content}
				</label>
			</div>

		</div>
	)
}

function CustomerAccountSummary({ cluster, className, ...props }) {

	return (
		<div className={styles.wrapper} {...props}>
			<Box title="Toplam" content="₺1263,70" />
			<Box title="Ödenen" content="₺1263,70" />
			<Box title="Bakiye" content="₺1263,70" />
			<Box title="Son Ödeme" content="₺1263,70" />
		</div>
	)
}

export default CustomerAccountSummary