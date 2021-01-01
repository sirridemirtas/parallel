import * as React from "react"

function SvgTvFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="tv-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z" />
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M128 416h256"
			/>
		</svg>
	)
}

export default SvgTvFill
