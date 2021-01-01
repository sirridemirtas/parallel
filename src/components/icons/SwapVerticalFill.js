import * as React from "react"

function SvgSwapVerticalFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="swap-vertical-fill_svg__ionicon"
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
				d="M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96"
			/>
		</svg>
	)
}

export default SvgSwapVerticalFill
