import * as React from "react"

function SvgStopwatch(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stopwatch_svg__ionicon"
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
				d="M256 232v-80"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={48}
				d="M256 88V72m-124 60l-12-12"
			/>
			<circle
				cx={256}
				cy={272}
				r={32}
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				d="M256 96a176 176 0 10176 176A176 176 0 00256 96z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgStopwatch
