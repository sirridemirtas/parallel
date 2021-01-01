import * as React from "react"

function SvgLocate(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="locate_svg__ionicon"
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
				strokeWidth={48}
				d="M256 96V56m0 400v-40"
			/>
			<path
				d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={48}
				d="M416 256h40m-400 0h40"
			/>
		</svg>
	)
}

export default SvgLocate
