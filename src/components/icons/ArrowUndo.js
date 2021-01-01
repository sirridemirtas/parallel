import * as React from "react"

function SvgArrowUndo(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-undo_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgArrowUndo
