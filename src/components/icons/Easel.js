import * as React from "react"

function SvgEasel(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="easel_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={48}
				y={80}
				width={416}
				height={272}
				rx={32}
				ry={32}
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
				d="M256 416v-64m0-272V48m144 416l-32-112M112 464l32-112"
			/>
		</svg>
	)
}

export default SvgEasel
