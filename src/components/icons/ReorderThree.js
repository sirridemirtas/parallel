import * as React from "react"

function SvgReorderThree(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="reorder-three_svg__ionicon"
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
				d="M96 256h320M96 176h320M96 336h320"
			/>
		</svg>
	)
}

export default SvgReorderThree
