import * as React from "react"

function SvgFilterCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="filter-circle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeWidth={32}
				strokeMiterlimit={10}
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeWidth={32}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M144 208h224m-192 64h160m-112 64h64"
			/>
		</svg>
	)
}

export default SvgFilterCircle
