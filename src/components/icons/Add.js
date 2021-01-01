import * as React from "react"

function SvgAdd(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="add_svg__ionicon"
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
				d="M256 112v288m144-144H112"
			/>
		</svg>
	)
}

export default SvgAdd
