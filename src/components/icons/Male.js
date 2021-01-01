import * as React from "react"

function SvgMale(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="male_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={216}
				cy={296}
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
				d="M448 160V64h-96m-28 124L448 64"
			/>
		</svg>
	)
}

export default SvgMale
