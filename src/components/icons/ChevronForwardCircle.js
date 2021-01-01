import * as React from "react"

function SvgChevronForwardCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="chevron-forward-circle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M216 352l96-96-96-96"
			/>
		</svg>
	)
}

export default SvgChevronForwardCircle
