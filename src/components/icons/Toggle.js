import * as React from "react"

function SvgToggle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="toggle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={368}
				cy={256}
				r={128}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={16}
				y={128}
				width={480}
				height={256}
				rx={128}
				ry={128}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgToggle
