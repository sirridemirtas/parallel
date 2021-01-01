import * as React from "react"

function SvgTabletPortrait(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="tablet-portrait_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={80}
				y={16}
				width={352}
				height={480}
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

export default SvgTabletPortrait
