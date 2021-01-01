import * as React from "react"

function SvgReorderThreeFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="reorder-three-fill_svg__ionicon"
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
				d="M102 256h308m-308-80h308M102 336h308"
			/>
		</svg>
	)
}

export default SvgReorderThreeFill
