import * as React from "react"

function SvgSubway(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="subway_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={112}
				y={32}
				width={288}
				height={352}
				rx={48}
				ry={48}
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
				d="M208 80h96"
			/>
			<rect
				x={112}
				y={128}
				width={288}
				height={96}
				rx={32}
				ry={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={176}
				cy={320}
				r={16}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={336}
				cy={320}
				r={16}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M144 464h224m-32-32l48 48m-208-48l-48 48"
			/>
		</svg>
	)
}

export default SvgSubway
