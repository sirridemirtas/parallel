import * as React from "react"

function SvgSearchCircleFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="search-circle-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
			<circle cx={232} cy={232} r={56} />
		</svg>
	)
}

export default SvgSearchCircleFill
