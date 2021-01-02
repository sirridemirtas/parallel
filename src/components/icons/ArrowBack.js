import * as React from "react"

function SvgArrowBack(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-back_svg__ionicon"
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
				d="M244 400L100 256l144-144M120 256h292"
			/>
		</svg>
	)
}

export default SvgArrowBack