import * as React from "react"

function SvgCheckmark(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="checkmark_svg__ionicon"
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
				d="M416 128L192 384l-96-96"
			/>
		</svg>
	)
}

export default SvgCheckmark
