import * as React from "react"

function SvgSquareFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="square-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z" />
		</svg>
	)
}

export default SvgSquareFill
