import styles from "./index.module.css"

function Spinner({ children, className, ...props }) {
	return (
		<div className={styles.wrapper}>
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				className={styles.spinner}
				{...props}>
				<circle
					cx="16"
					cy="16"
					r="14"
					fill="none"
					stroke="rgba(128,128,128,.5)"
					strokeWidth="4"
					opacity="0.2"
				></circle>
				<circle
					cx="16"
					cy="16"
					r="14"
					fill="none"
					stroke="var(--theme)"
					strokeDasharray="80"
					strokeDashoffset="60"
					strokeWidth="4"
				></circle>
			</svg>
		</div>
	)
}

export default Spinner