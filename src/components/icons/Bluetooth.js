import * as React from "react"

function SvgBluetooth(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="bluetooth_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M144 352l224-192L256 48v416l112-112-224-192"
			/>
		</svg>
	)
}

export default SvgBluetooth
