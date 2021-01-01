import * as React from "react"

function SvgBanFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ban-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={48}
				cx={256}
				cy={256}
				r={200}
			/>
			<path
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={48}
				d="M114.58 114.58l282.84 282.84"
			/>
		</svg>
	)
}

export default SvgBanFill
