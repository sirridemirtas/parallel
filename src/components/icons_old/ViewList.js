import * as React from "react"

function SvgViewList(props) {
	return (
		<svg
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path opacity={0.87} fill="none" d="M0 0h24v24H0V0z" />
			<path
				opacity={0.3}
				d="M5 11h2v2H5zm0 4h2v2H5zm0-8h2v2H5zm4 0h9v2H9zm0 8h9v2H9zm0-4h9v2H9z"
			/>
			<path d="M3 5v14h17V5H3zm4 12H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V7h2v2zm11 8H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z" />
		</svg>
	)
}

export default SvgViewList
