import * as React from "react"

function SvgLocateFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="locate-fill_svg__ionicon"
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
				strokeWidth={48}
				d="M256 96V56m0 400v-40m0-304a144 144 0 10144 144 144 144 0 00-144-144zm160 144h40m-400 0h40"
			/>
		</svg>
	)
}

export default SvgLocateFill
