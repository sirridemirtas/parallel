import * as React from "react"

function SvgPush(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="push_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M336 336h40a40 40 0 0040-40V88a40 40 0 00-40-40H136a40 40 0 00-40 40v208a40 40 0 0040 40h40"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M176 240l80-80 80 80m-80 224V176"
			/>
		</svg>
	)
}

export default SvgPush
