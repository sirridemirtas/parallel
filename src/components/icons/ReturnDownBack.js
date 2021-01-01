import * as React from "react"

function SvgReturnDownBack(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="return-down-back_svg__ionicon"
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
				d="M112 352l-64-64 64-64"
			/>
			<path
				d="M64 288h294c58.76 0 106-49.33 106-108v-20"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgReturnDownBack
