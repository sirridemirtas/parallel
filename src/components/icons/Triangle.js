import * as React from "react"

function SvgTriangle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="triangle_svg__ionicon"
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
				d="M48 448L256 64l208 384H48z"
			/>
		</svg>
	)
}

export default SvgTriangle
