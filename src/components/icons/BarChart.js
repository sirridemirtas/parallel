import * as React from "react"

function SvgBarChart(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="bar-chart_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M32 32v432a16 16 0 0016 16h432"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={96}
				y={224}
				width={80}
				height={192}
				rx={20}
				ry={20}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={240}
				y={176}
				width={80}
				height={240}
				rx={20}
				ry={20}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={383.64}
				y={112}
				width={80}
				height={304}
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

export default SvgBarChart
