import * as React from "react"

function SvgShapes(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="shapes_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M336 320H32L184 48l152 272zm-70.68-125.49A144 144 0 11192 320"
			/>
		</svg>
	)
}

export default SvgShapes
