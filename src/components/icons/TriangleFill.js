import * as React from "react"

function SvgTriangleFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="triangle-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z" />
		</svg>
	)
}

export default SvgTriangleFill
