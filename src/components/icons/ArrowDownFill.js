import * as React from "react"

function SvgArrowDownFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-down-fill_svg__ionicon"
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
				strokeWidth={48}
				d="M112 268l144 144 144-144M256 392V100"
			/>
		</svg>
	)
}

export default SvgArrowDownFill
