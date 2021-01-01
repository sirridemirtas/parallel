import * as React from "react"

function SvgArrowForwardCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-forward-circle_svg__ionicon"
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
				d="M262.62 336L342 256l-79.38-80m68.35 80H170"
			/>
			<path
				d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgArrowForwardCircle
