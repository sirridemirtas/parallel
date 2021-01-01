import * as React from "react"

function SvgHardwareChip(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="hardware-chip_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={80}
				y={80}
				width={352}
				height={352}
				rx={48}
				ry={48}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<rect
				x={144}
				y={144}
				width={224}
				height={224}
				rx={16}
				ry={16}
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
				d="M256 80V48m80 32V48M176 80V48m80 416v-32m80 32v-32m-160 32v-32m256-176h32m-32 80h32m-32-160h32M48 256h32m-32 80h32M48 176h32"
			/>
		</svg>
	)
}

export default SvgHardwareChip
