import * as React from "react"

function SvgColorFilter(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="color-filter_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={256}
				cy={184}
				r={120}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={344}
				cy={328}
				r={120}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={168}
				cy={328}
				r={120}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgColorFilter
