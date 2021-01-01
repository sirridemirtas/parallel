import * as React from "react"

function SvgReorderFourFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="reorder-four-fill_svg__ionicon"
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
				strokeWidth={44}
				d="M102 304h308m-308-96h308m-308-96h308M102 400h308"
			/>
		</svg>
	)
}

export default SvgReorderFourFill
