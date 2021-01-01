import * as React from "react"

function SvgFilter(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="filter_svg__ionicon"
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
				d="M32 144h448M112 256h288M208 368h96"
			/>
		</svg>
	)
}

export default SvgFilter
