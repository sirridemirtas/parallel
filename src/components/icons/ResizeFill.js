import * as React from "react"

function SvgResizeFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="resize-fill_svg__ionicon"
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
				d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"
			/>
		</svg>
	)
}

export default SvgResizeFill
