import * as React from "react"

function SvgStatsChart(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stats-chart_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={64}
				y={320}
				width={48}
				height={160}
				rx={8}
				ry={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={288}
				y={224}
				width={48}
				height={256}
				rx={8}
				ry={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={400}
				y={112}
				width={48}
				height={368}
				rx={8}
				ry={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={176}
				y={32}
				width={48}
				height={448}
				rx={8}
				ry={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgStatsChart
