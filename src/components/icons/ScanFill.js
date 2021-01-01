import * as React from "react"

function SvgScanFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="scan-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M342 444h46a56 56 0 0056-56v-46m0-172v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46m0-172v-46a56 56 0 0156-56h46"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={44}
			/>
		</svg>
	)
}

export default SvgScanFill
