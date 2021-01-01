import * as React from "react"

function SvgDiscFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="disc-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M256 176a80 80 0 1080 80 80.09 80.09 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z" />
			<path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 368a112 112 0 11112-112 112.12 112.12 0 01-112 112z" />
		</svg>
	)
}

export default SvgDiscFill
