import * as React from "react"

function SvgGrid(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="grid_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={48}
				y={48}
				width={176}
				height={176}
				rx={20}
				ry={20}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={288}
				y={48}
				width={176}
				height={176}
				rx={20}
				ry={20}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={48}
				y={288}
				width={176}
				height={176}
				rx={20}
				ry={20}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={288}
				y={288}
				width={176}
				height={176}
				rx={20}
				ry={20}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgGrid
