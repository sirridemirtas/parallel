import * as React from "react"

function SvgBeaker(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="beaker_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M445.2 48.05L398 48H128c-54.3 0-64 35.7-64 48 30.3 4.2 48 8 48 40v264a64 64 0 0064 64h192a64 64 0 0064-64V96c0-19 11.5-38.35 12.6-40 1.2-1.9 3.4-4.4 3.4-5.5s-.3-2.45-2.8-2.45zM112 176h320"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgBeaker
