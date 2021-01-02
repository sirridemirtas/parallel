import * as React from "react"

function SvgCafeFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="cafe-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M432 64H96a16 16 0 00-16 16v192a96.11 96.11 0 0096 96h112a96.11 96.11 0 0096-96v-80h18a62.07 62.07 0 0062-62V96a32 32 0 00-32-32zm0 66a30 30 0 01-30 30h-18V96h48zm-32 270H64a16 16 0 000 32h336a16 16 0 000-32z" />
		</svg>
	)
}

export default SvgCafeFill