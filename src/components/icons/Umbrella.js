import * as React from "react"

function SvgUmbrella(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="umbrella_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M256 272v160a32 32 0 01-32 32h0a32 32 0 01-32-32m272-160c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0196 0h0a78.28 78.28 0 01102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 01368 272h0a67.88 67.88 0 0196 0zM256 64V48"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgUmbrella