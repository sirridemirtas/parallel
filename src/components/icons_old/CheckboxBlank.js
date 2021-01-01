import * as React from "react"

function SvgCheckboxBlank(props) {
	return (
		<svg
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 24 24"
			width="1em"
			{...props}
		>
			<path d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m0 2v14H5V5h14z" />
		</svg>
	)
}

export default SvgCheckboxBlank
