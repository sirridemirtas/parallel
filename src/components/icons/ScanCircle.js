import * as React from "react"

function SvgScanCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="scan-circle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				d="M296 352h28a28 28 0 0028-28v-28m0-80v-28a28 28 0 00-28-28h-28m-80 192h-28a28 28 0 01-28-28v-28m0-80v-28a28 28 0 0128-28h28"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgScanCircle