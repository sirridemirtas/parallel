import * as React from "react"

function SvgPodium(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="podium_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M32 160v296a8 8 0 008 8h136V160a16 16 0 00-16-16H48a16 16 0 00-16 16zM320 48H192a16 16 0 00-16 16v400h160V64a16 16 0 00-16-16zm144 160H352a16 16 0 00-16 16v240h136a8 8 0 008-8V224a16 16 0 00-16-16z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgPodium
