import * as React from "react"

function SvgRefreshCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="refresh-circle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M288 193s12.18-6-32-6a80 80 0 1080 80"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={28}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={28}
				d="M256 149l40 40-40 40"
			/>
			<path
				d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgRefreshCircle
