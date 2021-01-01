import * as React from "react"

function SvgCaretBackCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="caret-back-circle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M273.77 169.57l-89.09 74.13a16 16 0 000 24.6l89.09 74.13A16 16 0 00300 330.14V181.86a16 16 0 00-26.23-12.29z" />
			<path
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgCaretBackCircle
