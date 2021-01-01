import * as React from "react"

function SvgListCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="list-circle_svg__ionicon"
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
				d="M224 184h128m-128 72h128m-128 71h128"
			/>
			<path
				d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<circle
				cx={168}
				cy={184}
				r={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={168}
				cy={257}
				r={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={168}
				cy={328}
				r={8}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgListCircle
