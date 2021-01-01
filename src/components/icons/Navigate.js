import * as React from "react"

function SvgNavigate(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="navigate_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M448 64L64 240.14h200a8 8 0 018 8V448z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgNavigate
