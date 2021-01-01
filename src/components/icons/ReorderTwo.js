import * as React from "react"

function SvgReorderTwo(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="reorder-two_svg__ionicon"
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
				d="M112 304h288m-288-96h288"
			/>
		</svg>
	)
}

export default SvgReorderTwo
