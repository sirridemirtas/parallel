import * as React from "react"

function SvgTv(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="tv_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={32}
				y={96}
				width={448}
				height={272}
				rx={32.14}
				ry={32.14}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M128 416h256"
			/>
		</svg>
	)
}

export default SvgTv