import * as React from "react"

function SvgPulse(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="pulse_svg__ionicon"
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
				d="M48 320h64l64-256 64 384 64-224 32 96h64"
			/>
			<circle
				cx={432}
				cy={320}
				r={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgPulse
