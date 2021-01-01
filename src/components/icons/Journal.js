import * as React from "react"

function SvgJournal(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="journal_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={96}
				y={48}
				width={320}
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
				strokeLinejoin="round"
				strokeWidth={60}
				d="M320 48v416"
			/>
		</svg>
	)
}

export default SvgJournal
