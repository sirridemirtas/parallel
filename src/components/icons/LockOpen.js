import * as React from "react"

function SvgLockOpen(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="lock-open_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M336 112a80 80 0 00-160 0v96"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={96}
				y={208}
				width={320}
				height={272}
				rx={48}
				ry={48}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgLockOpen
