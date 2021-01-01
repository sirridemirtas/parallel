import * as React from "react"

function SvgArrowUpCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-up-circle_svg__ionicon"
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
				d="M176 249.38L256 170l80 79.38m-80-68.35V342"
			/>
			<path
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgArrowUpCircle
