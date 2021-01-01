import * as React from "react"

function SvgCloseFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="close-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
		</svg>
	)
}

export default SvgCloseFill
