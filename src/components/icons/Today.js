import * as React from "react"

function SvgToday(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="today_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
				x={48}
				y={80}
				width={416}
				height={384}
				rx={48}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
				strokeLinecap="round"
				d="M128 48v32m256-32v32"
			/>
			<rect
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
				strokeLinecap="round"
				x={112}
				y={224}
				width={96}
				height={96}
				rx={13}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
				strokeLinecap="round"
				d="M464 160H48"
			/>
		</svg>
	)
}

export default SvgToday
