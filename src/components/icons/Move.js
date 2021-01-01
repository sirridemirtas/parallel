import * as React from "react"

function SvgMove(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="move_svg__ionicon"
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
				d="M176 112l80-80 80 80m-80.02-80l.02 448m-80-80l80 80 80-80m64-224l80 80-80 80M112 176l-80 80 80 80m-80-80h448"
			/>
		</svg>
	)
}

export default SvgMove
