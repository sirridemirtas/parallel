import * as React from "react"

function SvgSwapHorizontal(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="swap-horizontal_svg__ionicon"
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
				d="M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"
			/>
		</svg>
	)
}

export default SvgSwapHorizontal
