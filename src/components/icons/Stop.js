import * as React from "react"

function SvgStop(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stop_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={96}
				y={96}
				width={320}
				height={320}
				rx={24}
				ry={24}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgStop
