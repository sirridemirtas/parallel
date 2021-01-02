import * as React from "react"

function SvgTimeFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="time-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z" />
		</svg>
	)
}

export default SvgTimeFill