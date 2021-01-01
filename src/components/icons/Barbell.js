import * as React from "react"

function SvgBarbell(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="barbell_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M48 256h416"
			/>
			<rect
				x={384}
				y={128}
				width={32}
				height={256}
				rx={16}
				ry={16}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={96}
				y={128}
				width={32}
				height={256}
				rx={16}
				ry={16}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={32}
				y={192}
				width={16}
				height={128}
				rx={8}
				ry={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={464}
				y={192}
				width={16}
				height={128}
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

export default SvgBarbell
