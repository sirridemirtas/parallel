import * as React from "react"

function SvgRepeatFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="repeat-fill_svg__ionicon"
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
				d="M320 120l48 48-48 48"
			/>
			<path
				d="M352 168H144a80.24 80.24 0 00-80 80v16m128 128l-48-48 48-48"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				d="M160 344h208a80.24 80.24 0 0080-80v-16"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgRepeatFill
