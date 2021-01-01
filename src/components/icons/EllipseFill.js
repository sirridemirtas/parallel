import * as React from "react"

function SvgEllipseFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ellipse-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
		</svg>
	)
}

export default SvgEllipseFill
