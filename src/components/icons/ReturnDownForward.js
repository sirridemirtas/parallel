import * as React from "react"

function SvgReturnDownForward(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="return-down-forward_svg__ionicon"
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
				d="M400 352l64-64-64-64"
			/>
			<path
				d="M448 288H154c-58.76 0-106-49.33-106-108v-20"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgReturnDownForward
