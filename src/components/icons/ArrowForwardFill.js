import * as React from "react"

function SvgArrowForwardFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-forward-fill_svg__ionicon"
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
				d="M268 112l144 144-144 144m124-144H100"
			/>
		</svg>
	)
}

export default SvgArrowForwardFill
