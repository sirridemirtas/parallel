import * as React from "react"

function SvgUnlinkFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="unlink-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={48}
			/>
		</svg>
	)
}

export default SvgUnlinkFill
