import * as React from "react"

function SvgScan(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="scan_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M336 448h56a56 56 0 0056-56v-56m0-160v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56m0-160v-56a56 56 0 0156-56h56"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgScan
