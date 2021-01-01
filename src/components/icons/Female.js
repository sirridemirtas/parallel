import * as React from "react"

function SvgFemale(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="female_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={256}
				cy={184}
				r={152}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M256 336v144m58-64H198"
			/>
		</svg>
	)
}

export default SvgFemale
