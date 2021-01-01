import * as React from "react"

function SvgCellularFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="cellular-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M472 432h-48a24 24 0 01-24-24V104a24 24 0 0124-24h48a24 24 0 0124 24v304a24 24 0 01-24 24zm-128 0h-48a24 24 0 01-24-24V184a24 24 0 0124-24h48a24 24 0 0124 24v224a24 24 0 01-24 24zm-128 0h-48a24 24 0 01-24-24V248a24 24 0 0124-24h48a24 24 0 0124 24v160a24 24 0 01-24 24zm-128 0H40a24 24 0 01-24-24v-96a24 24 0 0124-24h48a24 24 0 0124 24v96a24 24 0 01-24 24z" />
		</svg>
	)
}

export default SvgCellularFill
