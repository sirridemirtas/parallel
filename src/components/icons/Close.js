import * as React from "react"

function SvgClose(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="close_svg__ionicon"
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
				d="M368 368L144 144m224 0L144 368"
			/>
		</svg>
	)
}

export default SvgClose
