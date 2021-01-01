import * as React from "react"

function SvgPause(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="pause_svg__ionicon"
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
				d="M176 96h16v320h-16zm144 0h16v320h-16z"
			/>
		</svg>
	)
}

export default SvgPause
