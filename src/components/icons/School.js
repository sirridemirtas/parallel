import * as React from "react"

function SvgSchool(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="school_svg__ionicon"
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
				d="M32 192L256 64l224 128-224 128L32 192z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M112 240v128l144 80 144-80V240m80 128V192M256 320v128"
			/>
		</svg>
	)
}

export default SvgSchool
