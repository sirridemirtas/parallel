import * as React from "react"

function SvgDelete(props) {
	return (
		<svg
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<path fill="none" d="M0 0h24v24H0V0z" />
			<path opacity={0.3} d="M8 9h8v10H8z" />
			<path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
		</svg>
	)
}

export default SvgDelete