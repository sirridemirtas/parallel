import * as React from "react"

function SvgTerminal(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="terminal_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={32}
				y={48}
				width={448}
				height={416}
				rx={48}
				ry={48}
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
				d="M96 112l80 64-80 64m96 0h64"
			/>
		</svg>
	)
}

export default SvgTerminal
