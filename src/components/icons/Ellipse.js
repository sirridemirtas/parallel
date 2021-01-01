import * as React from "react"

function SvgEllipse(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ellipse_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={256}
				cy={256}
				r={192}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgEllipse
