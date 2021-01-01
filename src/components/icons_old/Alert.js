import * as React from "react"

function SvgAlert(props) {
	return (
		<svg
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 48 48"
			{...props}
		>
			<path d="M46 24l-4.88-5.56.68-7.37-7.22-1.63-3.78-6.36L24 6l-6.8-2.92-3.78 6.36-7.22 1.63.68 7.37L2 24l4.88 5.56-.68 7.37 7.22 1.63 3.78 6.36L24 42l6.8 2.92 3.78-6.36 7.22-1.63-.68-7.37L46 24zM26 34h-4v-4h4v4zm0-8h-4V14h4v12z" />
		</svg>
	)
}

export default SvgAlert
